import React, { useEffect, useState } from 'react';
import HeaderBar from '../../components/Items/HeaderBar';
import { useQuery } from '@apollo/client';
import { 
  Box, Grid, Toolbar, Breadcrumbs, Container, Pagination,
  Button, Typography, Card, CardActionArea, CardContent, CardMedia
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';

import { GET_ORGANIZATION } from '../../actions/organization';

const OrganizationCard = () => {
  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://source.unsplash.com/random"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Organization Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Organization Description
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}


const Organization = () => {
  const {data, loading, error} = useQuery(GET_ORGANIZATION);
  const [Organization, setOrganization] = useState([]);

  const Organizations = data?.account?.organizations

  useEffect(() => {
    if (Organizations) {
      setOrganization(Organizations)
      console.log(Organizations)
    }
    if (error) {
      console.log(error)
      const token = localStorage.getItem('token');
      console.log(token)
    }
  }, [Organizations, error])

  return (
    <Box sx={{flexGrow: 1}}>
      <HeaderBar />
      <Toolbar />
      <br />
      <Box sx={{ flexGrow: 2}}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Breadcrumbs aria-label="breadcrumb">
              <Typography variant="h5" color="text.primary">Organization</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={8}>
            <Button sx={{float: "right"}} variant="contained" endIcon={<AddIcon />}>New</Button>
          </Grid>
        </Grid>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {
              Organization.length > 0 ? (
                Organization.map((organization, index) => (
                  <h5> organization.name </h5>
                ))) : (
                  <h5> No Organizations </h5>
                )
            }
          </Grid>
          <Pagination count={1} color="primary" sx={{position: 'absolute', bottom: 100, right:150}} />
        </Container>
      </Box>
    </Box>
  )
}

export default Organization