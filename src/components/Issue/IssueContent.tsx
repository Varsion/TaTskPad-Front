import React, {useEffect} from "react";
import { 
  Box, Divider, FormControl, Grid, Skeleton,
  InputLabel, MenuItem, Toolbar, Typography,
  Stack,
} from "@mui/material";
import CreateComment from "../Comment/CreateComment";
import IssueStatusCard from "./IssueStatusCard";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useQuery } from "@apollo/client";
import { GET_ISSUE } from "../../actions/issue";

interface IssueContentProps {
  keyNumber: any;
}

const IssueContent = (props: IssueContentProps) => {

  const { keyNumber } = props;

  const { data, loading, error } = useQuery(GET_ISSUE, {
    variables: { keyNumber }
  })

  const issue = data?.issue

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  useEffect(()=>{
    if(issue) {
      console.log(issue)
    }
  }, [issue])


  return (
    <Box sx={{ display: "flex", flexGrow: 1, mt: 3 }}>
    <Grid container spacing={2}>
      {/* Header */}
      <Grid item xs={8}>
        <Box sx={{minHeight: 600}}>
          <Typography variant="h4" mb={1}>
            {
              loading ? <Skeleton /> : issue.title
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
                  <div dangerouslySetInnerHTML={{ __html: issue.description }} />
            }
          </Typography>
        </Box>
        <Divider />
        <Box>
          <CreateComment />
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Grid container direction="column" alignItems="stretch">
          <Grid item>
            <Box sx={{ maxWidth: 300 }}>
              <FormControl fullWidth>
                <InputLabel id="issue-status">Status</InputLabel>
                <Select
                  labelId="issue-status"
                  id="demo-simple-select"
                  value={age}
                  label="Status"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Toolbar />
            <IssueStatusCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
  )
}

export default IssueContent;