import React, { useEffect, useState } from 'react';
import HeaderBar from '../../components/Items/HeaderBar';
import { useQuery } from '@apollo/client';
import { 
  Box, Grid, Toolbar, Breadcrumbs, Container, Pagination,
  Button, Typography, Card, CardActionArea, CardContent, 
  CardMedia, Stack, Modal, Tab, Tabs
} from '@mui/material';

import TabPanel from '../../components/Items/TabPanel';
import CreateOrganization from '../../components/OrganizationForms/CreateOrganization';

import AddIcon from '@mui/icons-material/Add';

import { GET_ORGANIZATION } from '../../actions/organization';

// const OrganizationCard = () => {
//   return (
//     <Grid item xs={4}>
//       <Card sx={{ maxWidth: 345 }}>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             height="140"
//             image="https://source.unsplash.com/random"
//             alt="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h6" component="div">
//               Organization Name
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Organization Description
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//     </Grid>
//   )
// }

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  minHeight: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Organization = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const {data, loading, error} = useQuery(GET_ORGANIZATION);
  const [Organization, setOrganization] = useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);

  const Organizations = data?.account?.organizations


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  useEffect(() => {
    if (Organizations) {
      setOrganization(Organizations)
    }
    if (error) {
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
            <Button sx={{float: "right"}} variant="contained" endIcon={<AddIcon />} onClick={handleModalOpen}>New</Button>
          </Grid>
        </Grid>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {
              Organization.length > 0 ? (
                Organization.map((organization, index) => (
                  <h5> organization.name </h5>
                ))) : (
                  <Grid item xs={12}>
                    <Toolbar />
                    <Stack 
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}
                    >
                      <Typography variant="subtitle1" color="text.primary">No Organizations</Typography>
                      <Typography variant="subtitle1" color="text.primary">Join one or Create one now?</Typography>
                      <Button sx={{float: "right"}} variant="contained" endIcon={<AddIcon />} onClick={handleModalOpen}>New</Button>
                    </Stack>
                  </Grid>
                )
            }
          </Grid>
          <Pagination count={1} color="primary" sx={{position: 'absolute', bottom: 100, right:150}} />
        </Container>
      </Box>

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Tabs value={tabValue} onChange={handleChange} centered>
            <Tab label="Create" />
            <Tab label="Join" />
          </Tabs>
          <Box>
            <TabPanel value={tabValue} index={0}>
              <CreateOrganization />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              Item Two
            </TabPanel>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}

export default Organization