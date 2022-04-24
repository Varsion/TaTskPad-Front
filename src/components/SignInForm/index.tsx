import * as React from "react"
import { useState, useEffect } from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Button, FormGroup, TextField } from "@mui/material"
import { SIGN_IN } from '../../actions/auth';
import { NotifyError, NotifySuccess } from '../Notify';
import { useMutation } from '@apollo/client'

const SignInForm = () => {
  const [signIn, { data, error, loading }] = useMutation(SIGN_IN)
  const account = data?.signIn?.account
  const organizations = data?.signIn?.account?.organizations
  const errors = data?.signIn?.errors

  interface SignInValues {
    email: string
    password: string
  }

  const defaultValues: SignInValues = {
    email: '',
    password: ''
  }

  useEffect(() => {
    if (account) {
      localStorage.setItem('token', account?.token)
      NotifySuccess('Sign in success')
      window.location.href = '/#/'
    }
    if (errors) {
      NotifyError(errors[0].message)
    }
  }, [account, organizations, errors, loading])

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
    let { email, password } = values
    signIn({
      variables: {
        input: {
          email,
          password
        }
      }
    })
  }

  return (
    <FormGroup onChange={handleInputChange}>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Email" id="email" margin="normal" value={values.email} required/>
        <TextField fullWidth label="Password" id="password" margin="normal" value={values.password} type="password" required/>

        <Box style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <LoadingButton 
            loading={loading} 
            variant="contained" 
            type="submit">
              Sign In
          </LoadingButton>
        </Box>
      </form>
    </FormGroup>
  )
}

export default SignInForm