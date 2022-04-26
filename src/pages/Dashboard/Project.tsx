import React, { useState, useEffect} from 'react';
import HeaderBar from '../../components/Items/HeaderBar';
import { 
  Box, Grid, Toolbar, Breadcrumbs, 
  Button, Typography, Modal, Tab, Tabs,
  Pagination
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';

import ProjectTable from '../../components/Tables/ProjectTables';
import CreateProject from '../../components/ProjectFroms/CreateProject';
import { useParams } from "react-router-dom";
import TabPanel from '../../components/Items/TabPanel';


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

const Project = () => {
  const [organizationId, setOrganizationId] = useState('')
  const [modalOpen, setModalOpen] = React.useState(false)
  const { id } = useParams<string>();

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  useEffect(() => {
    if(id){
      setOrganizationId(id)
    }
  }, [id])
  
  return (
    <Box sx={{flexGrow: 1}}>
      <HeaderBar />
      <Toolbar />
      <br />
      <Box sx={{ flexGrow: 1}}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Breadcrumbs aria-label="breadcrumb">
              <Typography variant="h5" color="text.primary">Projects</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={8}>
            <Button sx={{float: "right"}} variant="contained" endIcon={<AddIcon />} onClick={handleModalOpen}>New</Button>
          </Grid>
          <Grid item xs={12}>
              <ProjectTable organizationId={organizationId} />
          </Grid>
        </Grid>
        <Pagination count={1} color="primary" sx={{position: 'absolute', bottom: 100, right:150}} />
      </Box>

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Tabs value={0}  centered>
            <Tab label="Create" />
          </Tabs>
          <Box>
            <TabPanel value={0} index={0}>
              <CreateProject organizationId={organizationId} />
            </TabPanel>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}

export default Project
