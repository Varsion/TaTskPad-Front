import React, {useEffect} from "react";
import { 
  Box, Divider, FormControl, Grid, Skeleton,
  InputLabel, MenuItem, Toolbar, Typography,
  Stack, Button,
} from "@mui/material";
import CreateComment from "../Comment/CreateComment";
import IssueStatusCard from "./IssueStatusCard";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { NotifyError, NotifySuccess } from '../Notify'
import { useQuery, useMutation } from "@apollo/client";
import { GET_ISSUE, UPDATE_STATUS } from "../../actions/issue";
import { GET_WORKFLOW_STEPS } from "../../actions/project";

interface IssueContentProps {
  keyNumber: any;
}

const IssueContent = (props: IssueContentProps) => {
  const { keyNumber } = props;
  const projectId = "26d1021e-3793-48cb-b943-595758139690";

  const { data, loading } = useQuery(GET_ISSUE, {
    variables: { keyNumber }
  })

  const {data: workflowData } = useQuery(GET_WORKFLOW_STEPS, {
    variables: { projectId }
  })

  const [updateStatus, { data: updateIssueStatusData }] = useMutation(UPDATE_STATUS);

  const newStatus = updateIssueStatusData?.updateIssue?.issue?.status
  const updateError = updateIssueStatusData?.updateIssue?.issue?.error

  const workflowSteps = workflowData?.project?.workflowSteps;

  const issue = data?.issue
  const issueId = data?.issue?.id

  const [status, setStatus] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    updateStatus({
      variables: {
        input: {
          keyNumber,
          status: event.target.value as string
        }
      }
    });
  };

  useEffect(()=>{
    if(issue) {
      setStatus(issue.status)
    }
    if(newStatus) {
      setStatus(newStatus)
      NotifySuccess(`Issue status updated to ${newStatus}`)
    }
    if(updateError) {
      NotifyError(updateError[0].attribute+ " " + updateError[0].message)
    }
  }, [issue, newStatus, updateError])


  return (
    <Box sx={{ display: "flex", flexGrow: 1, mt: 3 }}>
    <Grid container spacing={2}>
      {/* Header */}
      <Grid item xs={8}>
        <Box sx={{minHeight: 600}}>
          <Typography variant="h4" mb={1}>
            {
              loading ? <Skeleton /> : issue?.title
            }
          </Typography>
          <br />
          <Typography variant="h6"> Description </Typography>
          <br />
          <Typography variant="body1" gutterBottom component={'div'}>
            {
              loading ? 
                <Stack spacing={2}>
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                </Stack> :
                  <div dangerouslySetInnerHTML={{ __html: issue?.description }} />
            }
          </Typography>
        </Box>
        <Divider />
        <Box>
          <CreateComment issueId={issueId} />
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Grid container direction="column" alignItems="stretch">
          <Grid item>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box sx={{ maxWidth: 300 }}>
                  <FormControl fullWidth>
                    <InputLabel id="issue-status">Status</InputLabel>
                    <Select
                      labelId="issue-status"
                      id="demo-simple-select"
                      value={status}
                      label="Status"
                      onChange={handleChange}
                    >
                      <MenuItem value="backlog">Backlog</MenuItem>
                      {
                        workflowSteps?.map((step: any, index: number) => {
                          return (
                            <MenuItem key={index} value={step.name}>{step.name}</MenuItem>
                          )
                        })
                      }
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={6} style={{
                display: 'flex',
                justifyContent: 'center',
              }}>
                <Button variant="contained">Update</Button>
              </Grid>
            </Grid>

            <Toolbar />
            <IssueStatusCard keyNumber={keyNumber} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
  )
}

export default IssueContent;