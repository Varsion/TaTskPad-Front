import * as React from 'react';
import { Link, Box, Container, Typography, CardContent, Card } from '@mui/material'

import SignInForm from '../../components/SignInForm';

import ParticlesBg from 'particles-bg';
import '../../styles/app.css';
import logo from "../../assets/logo.png"

export default function SignIn() {
  return (
    <Container maxWidth="md">
      <ParticlesBg type="circle" bg={true} />
      <Card className='center'>
        <CardContent>
          <Box style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <img src={logo} alt="logo" style={{maxWidth:200}}/>
          </Box>
          <Typography variant="h5" component="div">
            Sign In
          </Typography>

          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Don't have a account? <Link href="/#/sign_up" variant="body2">{'sign up now'}</Link>
          </Typography>
          <SignInForm />
        </CardContent>
      </Card>
    </Container>
  );
}