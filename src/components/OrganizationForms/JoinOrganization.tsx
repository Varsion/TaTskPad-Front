import React from 'react'
import { useState, useEffect } from "react"
import LoadingButton from '@mui/lab/LoadingButton'
import { Box, FormGroup, TextField } from "@mui/material"
import { CREATE_ORGANIZATION } from '../../actions/organization'
import { NotifyError, NotifySuccess } from '../Notify'
import { useMutation } from '@apollo/client'


const JoinOrganization = () => {
  const [joinOrganization, { data, error, loading }] = useMutation(CREATE_ORGANIZATION)


  const organization = data?.createOrganization?.organization
  const errors = data?.createOrganization?.errors

  useEffect(() => {
    if (organization) {
      NotifySuccess('请求提交成功')
      setTimeout(() => {
        window.location.reload()
      }, 5000)
    }
    if (errors) {
      NotifyError(errors[0].message)
    }
  }, [organization, errors, loading, error])

  const [code, SetCode] = useState('')

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    SetCode(value)
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    joinOrganization({
      variables: {
        input: {
          code
        }
      }
    })
  }

  return (
    <FormGroup onChange={handleInputChange}>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="组织邀请码" id="code" margin="normal" value={code} required/>
        <Box style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <LoadingButton 
            loading={loading} 
            variant="contained" 
            type="submit">
              提交申请
          </LoadingButton>
        </Box>
      </form>
    </FormGroup>
  )
}

export default JoinOrganization
