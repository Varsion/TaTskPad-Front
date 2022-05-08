import React, { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import LoadingButton from '@mui/lab/LoadingButton';
import { TextField, Box, FormGroup } from '@mui/material';
import { SIGN_UP } from '../../actions/auth';
import { NotifyError, NotifySuccess } from '../Notify';

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
      NotifySuccess('账户创建成功')
      window.location.href = '/#/sign_in'
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

        <TextField fullWidth label="姓名" id="name" margin="normal" value={values.name} onChange={handleInputChange} required/>

        <TextField fullWidth label="邮件" id="email" margin="normal" value={values.email} onChange={handleInputChange} required/>

        <TextField fullWidth label="密码" id="password" margin="normal" value={values.password} onChange={handleInputChange} type="password" required/>

        <TextField fullWidth label="确认密码" id="confirm" margin="normal" value={values.confirm} onChange={handleInputChange} type="password" required/>

        <Box style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <LoadingButton 
            loading={loading}
            variant="contained" 
            type='submit' >
              注册
          </LoadingButton>
          
        </Box>
      </form>
    </FormGroup>
  )
}

export default SignUpForm
