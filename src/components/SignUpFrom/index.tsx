import React, { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import { TextField, Box, Button, Checkbox, useFormControl, FormControl, FormGroup } from '@mui/material';
import { SIGN_UP } from '../../actions/auth';

import { SignUpProps } from './types'

interface SignUpValues {
  name: string
  email: string
  password: string
  confirm: string
}

const SignUpFrom = () => {

  // const [signUp, { data, error }] = useMutation(SIGN_UP)

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirm, setConfirm] = useState('');


  // const handleName = () => {}
  // const handleEmail = () => {}
  // const handlePassword = () => {}
  // const handleConfirm = () => {}

  const defaultValues:SignUpValues = {
    name: '',
    email: '',
    password: '',
    confirm: ''
  }

  const [values, SetValues] = useState(defaultValues)

  const SignUp = (e: any) => {
    console.log(e);
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(values);
  }


  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    SetValues({
      ...values,
      [name]: value,
    });
  };


  return (

    <FormGroup>
      <>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Name" id="name" margin="normal" value={values.name} onChange={handleInputChange} required/>

          <TextField fullWidth label="Email" id="email" margin="normal" value={values.email} onChange={handleInputChange} required/>
          <TextField fullWidth label="Password" id="password" margin="normal" value={values.password} onChange={handleInputChange} type="password" required/>
          <TextField fullWidth label="Confirm Password" id="confirm" margin="normal" value={values.confirm} onChange={handleInputChange} type="password" required/>

          <Box style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <Button variant="contained" type='submit' >Sign Up</Button>
          </Box>
        </form>
      </>
    </FormGroup>
  )
}

export default SignUpFrom
