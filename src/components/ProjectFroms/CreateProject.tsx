import React from 'react'
import { useState, useEffect } from "react"
import LoadingButton from '@mui/lab/LoadingButton'
import { Box, FormGroup, TextField } from "@mui/material"
import { CREATE_PROJECT } from '../../actions/project'
import { NotifyError, NotifySuccess } from '../Notify'
import { useMutation } from '@apollo/client'

interface ProjectFrom {
  organizationId: string
}

const CreateProject = (props: ProjectFrom) => {
  const { organizationId } = props

  const [createProject, { data, error, loading }] = useMutation(CREATE_PROJECT)

  const project = data?.createProject?.project
  const errors = data?.createProject?.errors

  interface CreateProjectInput {
    name: string
    keyWord: string
    projectClass: string
  }

  const defaultValues: CreateProjectInput = {
    name: '',
    keyWord: '',
    projectClass: 'software'
  }

  useEffect(() => {
    if (project) {
      NotifySuccess('create success')
      setTimeout(() => {
        window.location.reload()
      }, 5000)
    }
    if (errors) {
      NotifyError(errors[0].message)
    }
  }, [project, errors, loading, error])

  const [values, SetValues] = useState(defaultValues)

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    SetValues({
      ...values,
      [id]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let { name, keyWord, projectClass } = values
    createProject({
      variables: {
        input: {
          name,
          keyWord,
          projectClass,
          organizationId
        }
      }
    })
  }

  return (
    <FormGroup onChange={handleInputChange}>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Project Name" id="name" margin="normal" value={values.name} required/>
        <TextField fullWidth label="Project Key Word" id="keyWord" margin="normal" value={values.keyWord} required/>
        <TextField fullWidth label="Project Class" id="class" margin="normal" value={'software'} required disabled/>

        <Box style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <LoadingButton 
            loading={loading} 
            variant="contained" 
            type="submit">
              Create
          </LoadingButton>
        </Box>
      </form>
    </FormGroup>
  )
}

export default CreateProject
