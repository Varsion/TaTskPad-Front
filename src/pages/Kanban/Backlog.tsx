import React, {useEffect} from "react";
import {
  Box, Toolbar, Breadcrumbs, Link, Grid, TextField, 
  Button, Modal, Tab, Tabs,
} from "@mui/material";
import RowTable from "../../components/RowTable/RowTable";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from '@mui/icons-material/Add';
import TabPanel from "../../components/Items/TabPanel";
import CreateBucket from "../../components/Bucket/CreateBucket";
import { NotifyError, NotifySuccess } from "../../components/Notify";
import { GET_BUCKETS } from "../../actions/bucket";
import { useQuery } from "@apollo/client";

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
  const [tabValue, setTabValue] = React.useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  const projectId = "26d1021e-3793-48cb-b943-595758139690"
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const { loading, error, data } = useQuery(GET_BUCKETS,{
    variables: {projectId}
  });

  const buckets = data?.project?.buckets;

  useEffect(() => {
    if (buckets) {
      console.log(buckets);
    }
    if (error) {
      NotifyError(error.message);
      console.log(error);
    }

  },[buckets, error]);
  
  
  return (
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
          <TextField
            fullWidth
            id="outlined-basic"
            label="Search in Current Board"
            variant="outlined"
            size="small"
          />
          <SearchIcon
            sx={{ color: "action.active", mr: 1, my: 0.5, fontSize: 30 }}
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" size="small" endIcon={<AddIcon />} onClick={handleModalOpen}>
            Create
          </Button>
        </Grid>
      </Box>
      <Box sx={{ display: "flex", flexGrow: 1, mt: 3 }}>
        {
          loading ? 
            <Box>Loading...</Box> : 
              buckets && buckets?.length > 0 ? 
                <RowTable buckets={buckets} /> :
                  <Box sx={{ textAlign: "center" }}>No buckets found</Box>
        }
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
          </Tabs>
          <Box>
          <TabPanel value={0} index={0}>
              <CreateBucket projectId={projectId} />
            </TabPanel>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
