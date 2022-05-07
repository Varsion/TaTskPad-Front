import React, { useState, useEffect } from "react";
import {
  Collapse, Box, Paper, IconButton, Table, TableBody, TableCell, 
  TableContainer, TableRow, Button, ButtonGroup, 
  Modal, Tab, Tabs, FormGroup, TextField, Stack, Chip,
} from "@mui/material";
import { useMutation } from "@apollo/client";
import { CREATE_SPRINT, START_SPRINT, END_SPRINT } from "../../actions/sprint";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MinTable from "./MinTable";
import TabPanel from "../../components/Items/TabPanel";
import { LoadingButton } from "@mui/lab";

import { NotifyError, NotifySuccess } from "../Notify";

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

interface BucketRow {
  id: string;
  name: string;
  isRelease: boolean;
  issues: [IssueType]
  sprint?: SprintType
}

interface IssueType {
  id: string;
  title: string;
  keyNumber: string;
  status: string;
  genre: string;
  priority: string;
  assignee: {
    name: string;
    avatar: string;
  }
}

interface SprintType {
  id: string;
  name: string;
  version: string;
  isCurrent: boolean;
}
interface BucketProps {
  buckets: BucketRow[];
}

function Row(props: { row: BucketRow }) {
  const { row } = props;
  const { id, name, issues, sprint } = row;
  const [open, setOpen] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const projectId = localStorage.getItem("projectId");

  const [createSprint, {data: createData, loading: createLoading, error: createError}] = useMutation(CREATE_SPRINT);
  const [startSprint, {data: startData, loading: startLoading, error: startError}] = useMutation(START_SPRINT);
  const [endSprint, {data: endData, loading: endLoading, error: endError}] = useMutation(END_SPRINT);

  const [sprintData, setSprintData] = useState({
    name: "",
    version: "",
  });

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setSprintData({
      ...sprintData,
      [id]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let { name, version } = sprintData
    createSprint({
      variables: {
        input: {
          projectId,
          name,
          version,
          bucketId: id
        }
      }
    })
  }

  const handleStart = () => {
    startSprint({
      variables: {
        input: {
          id: sprint?.id
        }
      }
    })
  }

  const handleEnd = () => {
    endSprint({
      variables: {
        input: {
          id: sprint?.id
        }
      }
    })
  }

  useEffect(() => {
    if(createData) {
      console.log(createData);
      if (createData?.createSprint?.errors) {
        NotifyError(createData.createSprint.errors[0].attribute + " " + createData.createSprint.errors[0].message);
      }
      if (createData?.createSprint?.sprint) {
        NotifySuccess("Sprint create success");
      }
    }

    if(startData) {
      if (startData?.startSprint?.errors) {
        NotifyError(startData.startSprint.errors[0].message);
      }
      if (startData?.startSprint?.sprint) {
        NotifySuccess("Sprint Start success");
      }
    }
    if(endData) {
      if (endData?.endSprint?.errors) {
        NotifyError(endData.endSprint.errors[0].attribute + " " + endData.endSprint.errors[0].message);
      }
      if (endData?.endSprint?.sprint) {
        NotifySuccess("Sprint Complete success");
      }
    }
  } , [createData, startData, endData]);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="left" >
          {row.name} ({row.issues.length})
        </TableCell>
        <TableCell scope="row" align="left">
          {
            sprint ? 
            <Chip color="primary" label={sprint.name + " " + sprint.version} /> :
            ""
          }
        </TableCell>
        <TableCell align="right">
          <ButtonGroup disableElevation variant="contained">

            {
              sprint ? 
                <Stack direction="row" spacing={1}>
                  {
                    sprint.isCurrent ?
                    <Button variant="outlined" color="secondary" size="small" onClick={handleEnd}>
                      Complete Sprint
                    </Button> 
                    :
                    <Button variant="contained" color="success" size="small" onClick={handleStart}>
                      Start Sprint
                    </Button>
                  }
                </Stack>
                :
                <Button variant="contained" size="small" onClick={handleModalOpen}>
                  Create Sprint
                </Button>
            }
          </ButtonGroup>

        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Box>
              {
                row?.issues?.length > 0 ?
                  row.issues.map((issue: IssueType) => {
                    return <MinTable key={issue.id} {...issue} />;
                  }) : <Box>No issues</Box>
              }
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Tabs value={0} centered>
            <Tab label="Create Sprint" />
          </Tabs>
          <Box>
            <TabPanel value={0} index={0}>
            <FormGroup onChange={handleInputChange}>
              <form onSubmit={handleSubmit}>
                <TextField fullWidth label="Sprint Name" id="name" margin="normal" value={sprintData.name} required/>
                <TextField fullWidth label="Sprint Version" id="version" margin="normal" value={sprintData.version} required/>
                <TextField fullWidth label="Bucket Name" id="class" margin="normal" value={name} required disabled/>

                <Box style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                  <LoadingButton 
                    loading={createLoading} 
                    variant="contained" 
                    type="submit">
                      Create
                  </LoadingButton>
                </Box>
              </form>
            </FormGroup>
              
            </TabPanel>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function CollapsibleTable(props: BucketProps) {

  const { buckets } = props;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
          {buckets.map((bucket) => (
            <Row key={bucket.name} row={bucket} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
