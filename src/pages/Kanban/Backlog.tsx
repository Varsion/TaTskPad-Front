import React, {useEffect} from "react";
import {
  Box, Toolbar, Breadcrumbs, Link, Grid, TextField, 
  Button, Modal, Tab, Tabs, LinearProgress, Stack
} from "@mui/material";
import RowTable from "../../components/RowTable/RowTable";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from '@mui/icons-material/Add';
import TabPanel from "../../components/Items/TabPanel";
import CreateBucket from "../../components/Bucket/CreateBucket";
import { NotifyError } from "../../components/Notify";
import { GET_BUCKETS } from "../../actions/bucket";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import HeaderBar from "../../components/Items/HeaderBar";
import SideBar from "../../components/Items/SideBar";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  minHeight: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function Backlog() {

  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState(0);
  const [bucketOpen, setBucketOpen] = React.useState(false);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  const projectId = localStorage.getItem("projectId");

  const handleBucketModalOpen = () => setBucketOpen(true);
  const handleBucketModalClose = () => setBucketOpen(false);

  const { loading, error, data } = useQuery(GET_BUCKETS,{
    variables: {projectId}
  });

  const buckets = data?.project?.buckets;

  const createIssue = () => {
    navigate('/issue/create')
  }

  useEffect(() => {
    if (error) {
      NotifyError(error.message);
      console.log(error);
    }

  },[error]);
  
  
  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <HeaderBar />
      <SideBar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/#/">
            Projects
          </Link>
          <Link underline="hover" color="inherit" href="/#/">
            TaTskPad
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/#/"
            aria-current="page"
          >
            Backlog
          </Link>
        </Breadcrumbs>
        <Box sx={{ display: "flex", flexGrow: 1, mt: 3 }}>
          <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
            {/* <TextField
              fullWidth
              id="outlined-basic"
              label="Search in Current Board"
              variant="outlined"
              size="small"
            />
            <SearchIcon
              sx={{ color: "action.active", mr: 1, my: 0.5, fontSize: 30 }}
            /> */}
          </Grid>
          <Grid item xs={4}>
            <Stack direction="row-reverse" spacing={1}>
              <Button variant="contained" size="small" endIcon={<AddIcon />} onClick={handleBucketModalOpen}>
                Create Bucket
              </Button>
              <Button variant="contained" size="small" endIcon={<AddIcon />} onClick={createIssue}>
                New Issue
              </Button>
            </Stack>
          </Grid>
        </Box>
        <Box sx={{ display: "flex", flexGrow: 1, mt: 3 }}>
          {
            loading ? 
              <Box sx={{ width: '100%' }}>
                <LinearProgress />
              </Box> : 
                buckets && buckets?.length > 0 ? 
                  <RowTable buckets={buckets} /> :
                    <Box sx={{ textAlign: "center" }}>No buckets found</Box>
          }
        </Box>
        <Modal
          open={bucketOpen}
          onClose={handleBucketModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Tabs value={tabValue} onChange={handleChange} centered>
              <Tab label="创建" />
            </Tabs>
            <Box>
            <TabPanel value={0} index={0}>
                <CreateBucket projectId={projectId} />
              </TabPanel>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}
