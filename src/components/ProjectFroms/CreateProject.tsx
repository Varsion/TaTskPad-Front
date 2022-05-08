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
    codeUrl: string
    projectClass: string
  }

  const defaultValues: CreateProjectInput = {
    name: '',
    keyWord: '',
    codeUrl: '',
    projectClass: 'software'
  }

  useEffect(() => {
    if (project) {
      NotifySuccess('创建成功')
      setTimeout(() => {
        window.location.reload()
      }, 5000)
    }
    if (errors) {
      NotifyError(errors[0].attribute + ' ' + errors[0].message)
    }
    if(error) {
      console.log(error)
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
    let { name, keyWord, projectClass, codeUrl } = values
    createProject({
      variables: {
        input: {
          name,
          keyWord,
          codeUrl,
          projectClass,
          organizationId
        }
      }
    })
  }

  return (
    <FormGroup onChange={handleInputChange}>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="项目名称" id="name" margin="normal" value={values.name} required/>
        <TextField fullWidth label="项目关键词" id="keyWord" margin="normal" value={values.keyWord} required/>
        <TextField fullWidth label="项目代码库链接" id="codeUrl" margin="normal" value={values.codeUrl}/>
        <TextField fullWidth label="项目类别" id="class" margin="normal" value={'software'} required disabled/>

        <Box style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <LoadingButton 
            loading={loading} 
            variant="contained" 
            type="submit">
              创建
          </LoadingButton>
        </Box>
      </form>
    </FormGroup>
  )
}

export default CreateProject
