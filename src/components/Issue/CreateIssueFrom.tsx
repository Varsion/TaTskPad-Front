import React from 'react'
import { useState, useEffect } from "react"
import LoadingButton from '@mui/lab/LoadingButton'
import { Box, FormGroup, MenuItem, TextField } from "@mui/material"
import { CREATE_ORGANIZATION } from '../../actions/organization'
import { NotifyError, NotifySuccess } from '../Notify'
import { useMutation } from '@apollo/client'


const CreateIssue = () => {
  const [createOrganization, { data, error, loading }] = useMutation(CREATE_ORGANIZATION)
  const [organizationClass, setOrganizationClass] = useState('Personal')

  const organization = data?.createOrganization?.organization
  const errors = data?.createOrganization?.errors

  interface CreateOrganizationInput {
    name: string
    email: string
  }

  const defaultValues: CreateOrganizationInput = {
    name: '',
    email: ''
  }

  useEffect(() => {
    if (organization) {
      NotifySuccess('create success')
      setTimeout(() => {
        window.location.reload()
      }, 5000)
    }
    if (errors) {
      NotifyError(errors[0].message)
    }
  }, [organization, errors, loading, error])

  const [values, SetValues] = useState(defaultValues)

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    SetValues({
      ...values,
      [id]: value,
    });
  };

  const handleClassSelect = (e: any) => {
    const { value } = e.target
    setOrganizationClass(value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let { name, email } = values
    createOrganization({
      variables: {
        input: {
          name,
          email,
          organizationClass
        }
      }
    })
  }

  return (
    <FormGroup onChange={handleInputChange}>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Organization Name" id="name" margin="normal" value={values.name} required/>
        <TextField fullWidth label="Organization Email" id="email" margin="normal" value={values.email} required/>
        <TextField select fullWidth label="Organization Class" id="class" margin="normal" value={organizationClass} onChange={handleClassSelect} required>
            <MenuItem key={'Personal'} value={'Personal'}>
              Personal
            </MenuItem>
            <MenuItem key={'Business'} value={'Business'}>
              Business
            </MenuItem>
        </TextField>
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

export default CreateIssue
