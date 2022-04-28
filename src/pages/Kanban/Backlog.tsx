import * as React from "react";
import {
  Box,
  Toolbar,
  Breadcrumbs,
  Link,
  Grid,
  TextField,
  Button,
  Modal,
  Tab,
  Tabs,
} from "@mui/material";
import RowTable from "../../components/RowTable/RowTable";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from '@mui/icons-material/Add';
import TabPanel from "../../components/Items/TabPanel";
import CreateBucket from "../../components/Bucket/CreateBucket";

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
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  
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
        <RowTable />
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
              <CreateBucket projectId={'77836925-9600-494e-a982-0cd2ff02cbaf'} />
            </TabPanel>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
