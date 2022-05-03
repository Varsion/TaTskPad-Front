import React, {useEffect, useState} from "react";
import { Box, FormGroup, TextField, Toolbar, Stack, Breadcrumbs, Link, FormControl, InputLabel, MenuItem, Select, Avatar, Chip } from "@mui/material";
import HeaderBar from "../../components/Items/HeaderBar";
import SideBar from "../../components/Items/SideBar";
import { LoadingButton } from "@mui/lab";
import { SelectChangeEvent } from "@mui/material/Select";
import { NotifyError, NotifySuccess } from "../../components/Notify";
import { CREATE_ISSUE } from "../../actions/issue";
import { GET_MEMBERS } from "../../actions/organization";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../styles/editor.css';
import { useMutation, useQuery } from "@apollo/client";



interface IssueProps {
  title: string;
  priority: string;
  description: string;
  genre: string;
  estimate: string;
}

const CreateIssue = () => {

  const projectId = localStorage.getItem("projectId");
  const organizationId = localStorage.getItem("organizationId");

  const [createIssue, { data, error, loading }] = useMutation(CREATE_ISSUE)
  const { data: membersData } = useQuery(GET_MEMBERS, {
    variables: { organizationId } })

  const defaultValues: IssueProps = {
    title: "",
    priority: "",
    description: "",
    genre: "",
    estimate: ""
  }

  const [values, SetValues] = useState(defaultValues)
  const errors = data?.createIssue.errors;
  const issue = data?.createIssue.issue;
  
  const members = membersData?.organization.members;

  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('p2');
  const [assignee, setAssignee] = useState('');
  const [type, setType] = useState('story');

  const handlePriority = (event: SelectChangeEvent) => {
    setPriority(event.target.value as string);
  };

  const handleAssignee = (event: SelectChangeEvent) => {
    setAssignee(event.target.value as string);
  };

  const handleType = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  useEffect(() => {
    if(issue) {
      NotifySuccess("Issue created successfully")
      console.log(issue)
    }
    if(errors) {
      NotifyError(errors[0].attribute + ' ' + errors[0].message)
      console.log(errors)
    }
    if(error) {
      NotifyError(error.message)
      console.log(error)
    }
  }, [issue, error, errors])

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    SetValues({
      ...values,
      [id]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { title, genre, estimate } = values;
    createIssue({
      variables: {
        input: {
          projectId,
          description,
          priority,
          title,
          genre,
          assigneeId: assignee,
          estimate
        }
      }
    })
  }

  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <HeaderBar />
      <SideBar />
      <Box sx={{ flexGrow: 1, p: 5 }}>
        <Toolbar />
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/#/">
            Projects
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/#/"
          >
            Issue
          </Link>
        </Breadcrumbs>
        <FormGroup onChange={handleInputChange}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField label="Title" id="title" margin="normal" value={values.title} sx={{width: 600}} required/>
              <FormControl sx={{width: 300}}>
                <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="priority"
                  value={priority}
                  onChange={handlePriority}
                  label="Priority"
                >
                  <MenuItem value={'p0'}>P0</MenuItem>
                  <MenuItem value={'p1'}>P1</MenuItem>
                  <MenuItem value={'p2'}>P2</MenuItem>
                  <MenuItem value={'p3'}>P3</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{width: 300}}>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="type"
                  value={type}
                  onChange={handleType}
                  label="Type"
                >
                  <MenuItem value={'story'}>Story</MenuItem>
                  <MenuItem value={'bug'}>Bug</MenuItem>
                  <MenuItem value={'task'}>Task</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{width: 300}}>
                <InputLabel id="demo-simple-select-label">Assignee</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="assignee"
                  value={assignee}
                  onChange={handleAssignee}
                  label="Assignee"
                >
                  {
                    members?.map((member: any, index: number) => {
                      return (
                        <MenuItem key={index} value={member.id}><Chip avatar={<Avatar src={member.avatar} />} label={member.name} /></MenuItem>
                      )
                    })
                  }
                </Select>
              </FormControl>

              <TextField label="Estimate" id="estimate" margin="normal" value={values.estimate} sx={{width: 300}} />
              <Box sx={{width: 1000}}>
                <ReactQuill 
                  theme="snow"
                  id="description"
                  value={description} 
                  onChange={setDescription}
                  placeholder={'Issue Description'}
                />
              </Box>
              <LoadingButton 
                loading={loading}
                variant="contained"
                type='submit' 
                sx={{width: 100}}
                >
                  Create
                </LoadingButton>
            </Stack>
          </form>
        </FormGroup>
      </Box>
    </Box>
  )
}

export default CreateIssue;