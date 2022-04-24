import React, { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import LoadingButton from '@mui/lab/LoadingButton';
import { TextField, Box, Button, FormGroup } from '@mui/material';
import { SIGN_UP } from '../../actions/auth';
import { NotifyError, NotifySuccess } from '../Notify';

import { SignUpProps } from './types'

interface SignUpValues {
  name: string
  email: string
  password: string
  confirm: string
}

const SignUpForm = () => {

  const [signUp, { data, error, loading }] = useMutation(SIGN_UP)
  const account = data?.signUp?.account
  const errors = data?.signUp?.errors

  const defaultValues:SignUpValues = {
    name: '',
    email: '',
    password: '',
    confirm: ''
  }

  const [values, SetValues] = useState(defaultValues)

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(values);
    let { name, email, password, confirm } = values
    signUp({
      variables: {
        input: {
          name,
          email,
          password
        }
      }
    })
  }

  useEffect(() => {
    if (account) {
      NotifySuccess('Account created successfully')
      setTimeout(() => {
        window.location.href = '/#/sign_in'
      }, 3000)
    }
    if (errors) {
      NotifyError(errors[0].attribute+ ' ' + errors[0].message)
    }
  }, [account, errors, loading])


  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    SetValues({
      ...values,
      [id]: value,
    });
  };


  return (

    <FormGroup>
      <form onSubmit={handleSubmit}>

        <TextField fullWidth label="Name" id="name" margin="normal" value={values.name} onChange={handleInputChange} required/>

        <TextField fullWidth label="Email" id="email" margin="normal" value={values.email} onChange={handleInputChange} required/>

        <TextField fullWidth label="Password" id="password" margin="normal" value={values.password} onChange={handleInputChange} type="password" required/>

        <TextField fullWidth label="Confirm Password" id="confirm" margin="normal" value={values.confirm} onChange={handleInputChange} type="password" required/>

        <Box style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <LoadingButton 
            loading={loading}
            variant="contained" 
            type='submit' >
              Sign Up
          </LoadingButton>
          
        </Box>
      </form>
    </FormGroup>
  )
}

export default SignUpForm
