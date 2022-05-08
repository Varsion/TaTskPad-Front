import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import ParticlesBg from 'particles-bg';
import '../../styles/app.css';
import logo from "../../assets/logo.png"
import SignUpForm from '../../components/SignUpForm';


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
            注册
          </Typography>

          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            已经有账户了？ <Link href="/sign_in">登陆</Link>
          </Typography>
          <SignUpForm />
        </CardContent>
      </Card>
    </Container>
  );
}