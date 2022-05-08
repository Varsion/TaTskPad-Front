import React from 'react'
import { useState, useEffect } from "react"
import LoadingButton from '@mui/lab/LoadingButton'
import { Box, FormGroup, TextField } from "@mui/material"
import { CREATE_ROLE } from '../../actions/role'
import { NotifyError, NotifySuccess } from '../Notify'
import { useMutation } from '@apollo/client'


const CreateRole = () => {
  const [createRole, { data, error, loading }] = useMutation(CREATE_ROLE)

  const organizationId = localStorage.getItem("organizationId");

  const role = data?.createRole?.role
  const errors = data?.createRole?.errors

  interface CreateRoleInput {
    name: string
    description: string
  }

  const defaultValues: CreateRoleInput = {
    name: '',
    description: ''
  }


  const [values, SetValues] = useState(defaultValues)

  useEffect(() => {
    if (role) {
      NotifySuccess('创建成功')
      setTimeout(() => {
        window.location.reload()
      }, 5000)
    }
    if (errors) {
      NotifyError(errors[0].message)
    }
  }, [role, errors, loading, error])

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    SetValues({
      ...values,
      [id]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let { name, description } = values
    createRole({
      variables: {
        input: {
          name,
          description,
          organizationId
        }
      }
    })
  }

  return (
    <FormGroup onChange={handleInputChange}>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="权限名称" id="name" margin="normal" value={values.name} required/>
        <TextField fullWidth label="权限描述" id="description" margin="normal" value={values.description} required/>
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

export default CreateRole;
