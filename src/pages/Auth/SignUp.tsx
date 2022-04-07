import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import ParticlesBg from 'particles-bg';
import '../../styles/app.css';
import logo from "../../assets/logo.png"



const sign_up = (
  <CardContent>
    <Box style={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <img src={logo} alt="logo" style={{maxWidth:200}}/>
    </Box>
    <Typography variant="h5" component="div">
      Sign Up
    </Typography>

    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Already have an account? <Link href="/#/sign_in">{'sign in'}</Link>
    </Typography>

    <FormGroup>
      <TextField fullWidth label="Name" id="name" margin="normal" required/>
      <TextField fullWidth label="Email" id="email" margin="normal" required/>
      <TextField fullWidth label="Password" id="password" margin="normal" type="password" required/>
      <TextField fullWidth label="Confirm Password" id="password" margin="normal" type="password" required/>

      <FormControlLabel control={<Checkbox />} label="I agree to the Privacy Policy!" />
      <Box style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Button variant="contained">Sign Up</Button>
      </Box>
    </FormGroup>
  </CardContent>
);

export default function SignIn() {
  return (
    <Container maxWidth="md">
      <ParticlesBg type="circle" bg={true} />
      <Card className='center'>{sign_up}</Card>
    </Container>
  );
}