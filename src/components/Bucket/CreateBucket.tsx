import React from 'react'
import { useState, useEffect } from "react"
import LoadingButton from '@mui/lab/LoadingButton'
import { Box, FormGroup, TextField } from "@mui/material"
import { NotifyError, NotifySuccess } from '../Notify'
import { useMutation } from '@apollo/client'

import { CREATE_BUCKET } from '../../actions/bucket'

interface PropsType {
  projectId: any
}

const CreateBucket = ({projectId}: PropsType) => {
  const [createBucket, { data, error, loading }] = useMutation(CREATE_BUCKET)

  const bucket = data?.createBucket?.bucket
  const errors = data?.createBucket?.errors

  interface CreateOrganizationInput {
    name: string
  }

  const defaultValues: CreateOrganizationInput = {
    name: ''
  }

  useEffect(() => {
    if (bucket) {
      NotifySuccess('问题桶创建成功')
      console.log(bucket)
      setTimeout(() => {
        window.location.reload()
      }, 5000)
    }
    if (errors) {
      NotifyError(errors[0].message)
    }
  }, [bucket, errors, loading, error])

  const [values, SetValues] = useState(defaultValues)

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    console.log(value)
    SetValues({
      ...values,
      [id]: value,
    });
  };


  const handleSubmit = (event: any) => {
    event.preventDefault();
    let { name } = values
    createBucket({
      variables: {
        input: {
          name,
          projectId
        }
      }
    })
  }

  return (
    <FormGroup onChange={handleInputChange}>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="任务桶名称" id="name" margin="normal" value={values.name} required/>

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

export default CreateBucket
