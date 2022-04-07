import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import Link from '@mui/material/Link';

import ParticlesBg from 'particles-bg';
import '../../styles/app.css';
import logo from "../../assets/logo.png"

const sign_in = (
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
    <FormGroup>
      <TextField fullWidth label="Email" id="email" margin="normal" required/>
      <TextField fullWidth label="Password" id="password" margin="normal" type="password" required/>

      <Box style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Button variant="contained">Sign In</Button>
      </Box>
    </FormGroup>
  </CardContent>
);

export default function SignIn() {
  return (
    <Container maxWidth="md">
      <ParticlesBg type="circle" bg={true} />
      <Card className='center'>{sign_in}</Card>
    </Container>
  );
}