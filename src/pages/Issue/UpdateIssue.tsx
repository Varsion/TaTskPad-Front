import React, {useEffect, useState} from "react";
import { Box, FormGroup, TextField, Toolbar, Stack, Breadcrumbs, Link, FormControl, InputLabel, MenuItem, Select, Avatar, Chip } from "@mui/material";
import HeaderBar from "../../components/Items/HeaderBar";
import SideBar from "../../components/Items/SideBar";
import { LoadingButton } from "@mui/lab";
import { SelectChangeEvent } from "@mui/material/Select";
import { NotifyError, NotifySuccess } from "../../components/Notify";
import { UPDATE_ISSUE, GET_ISSUE } from "../../actions/issue";
import { GET_MEMBERS } from "../../actions/organization";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../styles/editor.css';
import { useMutation, useQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";


interface IssueProps {
  title: string;
  priority: string;
  description: string;
  genre: string;
  estimate: string;
}

const UpdateIssue = () => {

  const { keyNumber } = useParams();
  const navigate = useNavigate();

  const organizationId = localStorage.getItem("organizationId");

  const [updateIssue, { data, error, loading }] = useMutation(UPDATE_ISSUE)
  const { data: dataIssue, loading: loadingIssue } = useQuery(GET_ISSUE, {
    variables: { keyNumber }
  })

  const updateIssueData = data?.updateIssue?.issue
  const updateIssueError = dataIssue?.updateIssue?.errors
  const { data: membersData } = useQuery(GET_MEMBERS, {
    variables: { organizationId } })

  const defaultValues: IssueProps = {
    title: "",
    priority: "",
    description: "",
    genre: "",
    estimate: ""
  }

  const [values, SetValues] = useState(defaultValues);
  
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
    if(dataIssue) {
      console.log(dataIssue.issue)
      SetValues(dataIssue.issue)
      setPriority(dataIssue.issue.priority)
      setDescription(dataIssue.issue.description)
      setAssignee(dataIssue.issue.assignee?.id)
    }
    if(updateIssueError) {
      NotifyError(updateIssueError[0].message)
    }
    if(updateIssueData) {
      NotifySuccess("Issue updated successfully")
      setTimeout(() => {
        navigate("/issue/" + keyNumber)
      } , 5000)
    }
  }, [dataIssue, updateIssueData, updateIssueError])

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
    updateIssue({
      variables: {
        input: {
          keyNumber,
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
            项目
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/#/"
          >
            问题
          </Link>
        </Breadcrumbs>
        <FormGroup onChange={handleInputChange}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField label="标题" id="title" margin="normal" value={values.title} sx={{width: 600}} required/>
              <FormControl sx={{width: 300}}>
                <InputLabel id="demo-simple-select-label">优先级</InputLabel>
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
                <InputLabel id="demo-simple-select-label">问题类型</InputLabel>
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
                <InputLabel id="demo-simple-select-label">经办人</InputLabel>
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

              <TextField label="原始预估时间" id="estimate" margin="normal" value={values.estimate} sx={{width: 300}} />
              <Box sx={{width: 1000}}>
                <ReactQuill 
                  theme="snow"
                  id="description"
                  value={description} 
                  onChange={setDescription}
                  placeholder={'问题描述'}
                />
              </Box>
              <LoadingButton 
                loading={loading}
                variant="contained"
                type='submit' 
                sx={{width: 100}}
                >
                  更新
                </LoadingButton>
            </Stack>
          </form>
        </FormGroup>
      </Box>
    </Box>
  )
}

export default UpdateIssue;