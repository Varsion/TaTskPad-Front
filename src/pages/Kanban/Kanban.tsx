import React, {useEffect} from "react";
import { 
  Box, Breadcrumbs, Button, Grid, Link, Stack, 
  Tab, TextField, Toolbar, Typography, Paper, styled 
} from "@mui/material";
import HeaderBar from "../../components/Items/HeaderBar";
import SideBar from "../../components/Items/SideBar";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { NotifyError, NotifySuccess } from "../../components/Notify";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router";
import { GET_CURRENT_SPRINT } from "../../actions/sprint";
import IssueCard from "../../components/Issue/IssueCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface IssueType {
  id: string;
  title: string;
  assignee?: AccountType;
  keyNumber: string;
  status: string;
  genre: string;
  priority: string;
}

interface AccountType {
  name: string;
  avatar: string;
}

export default function Kanban() {


  // const defaultValues:IssueType[] = [
  //   {id: "1", title: "hello-1", author: {name: "John", avatar: "https://avatars0.githubusercontent.com/u/174825?s=460&v=4"}, keyNumber: "KEY-1", status: "TODO", genre: "bug", priority: "p1"},
  //   {id: "2", title: "hello-2", author: {name: "John", avatar: "https://avatars0.githubusercontent.com/u/174825?s=460&v=4"}, keyNumber: "KEY-2", status: "TODO", genre: "story", priority: "p1"},
  //   {id: "3", title: "hello-3", author: {name: "John", avatar: "https://avatars0.githubusercontent.com/u/174825?s=460&v=4"}, keyNumber: "KEY-3", status: "TODO", genre: "story", priority: "p1"}
  // ]
  const navigate = useNavigate();
  const projectId = localStorage.getItem('projectId');

  const [backlogs, setBacklogs] = React.useState<IssueType[]>([]);
  const [todos, setTodos] = React.useState<IssueType[]>([]);
  const [doings, setDoings] = React.useState<IssueType[]>([]);
  const [dones, setDones] = React.useState<IssueType[]>([]);

  const { data, loading, error } = useQuery(GET_CURRENT_SPRINT, {
    variables: {
      projectId
    }
  })

  const sprint = data?.project?.currentSprint;
  const issues: IssueType[] = sprint?.issueList?.issues;

  useEffect(() => {
    if(sprint) {
      console.log(sprint)
    }
    if(issues) {
      setBacklogs(issues.filter(issue => issue.status === "backlog"));
      setTodos(issues.filter(issue => issue.status === "Todo"));
      setDoings(issues.filter(issue => issue.status === "Doing"));
      setDones(issues.filter(issue => issue.status === "Done"));
      if (issues.length === 0) {
        NotifyError("Current Sprint has no issues")
      }
    }
  } , [sprint, issues]);

  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <HeaderBar />
      <SideBar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/#/">
            项目
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/#/"
            aria-current="page"
          >
            冲刺看板
          </Link>
        </Breadcrumbs>
        <Box sx={{ display: 'flex', flexGrow: 1, mt:3 }}>

          <Grid container spacing={2}>

            {/* Header */}
            <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h4" component="h2">
                {
                  sprint ? 
                    sprint.name + " " + sprint.version :
                    "None"
                }
              </Typography>
            </Grid>
            <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center' }}>
              {/* <TextField fullWidth id="outlined-basic" label="Search in Current Board" variant="outlined" size="small"/> 
              <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5, fontSize:30 }} /> */}
            </Grid>
            <Grid item xs={2}>
              <Stack direction="row-reverse" spacing={1}>
                <Button variant="contained" size="small" endIcon={<DoneAllIcon />}>
                  完成冲刺
                </Button>
                <Button variant="contained" size="small" endIcon={<AddIcon />} onClick={() => navigate("/issue/create")}>
                  新建问题
                </Button>
              </Stack>
            </Grid>
            {/* Header */}
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Item>
                  <Tab label="Backlog" disabled/>
                  <Stack direction="column" spacing={2}>
                    {
                      backlogs.length > 0 ?
                        backlogs.map(issue => {
                          return <IssueCard
                                    id={issue.id}
                                    title={issue.title}
                                    assignee={issue.assignee}
                                    keyNumber={issue.keyNumber}
                                    status={issue.status}
                                    genre={issue.genre}
                                    priority={issue.priority}
                                    key={issue.id} 
                                  />
                        }) :
                        <Typography variant="body2" component="p">
                          当前泳道为空
                        </Typography>
                    }
                  </Stack>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <Tab label="ToDo" disabled/>
                  <Stack direction="column" spacing={2}>
                    {
                      todos.length > 0 ?
                        todos.map(issue => {
                          return <IssueCard
                                    id={issue.id}
                                    title={issue.title}
                                    assignee={issue.assignee}
                                    keyNumber={issue.keyNumber}
                                    status={issue.status}
                                    genre={issue.genre}
                                    priority={issue.priority}
                                    key={issue.id} 
                                  />
                        }) :
                        <Typography variant="body2" component="p">
                          当前泳道为空
                        </Typography>
                    }
                  </Stack>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <Tab label="Doing" disabled/>
                  <Stack direction="column" spacing={2}>
                    {
                      doings.length > 0 ?
                        doings.map(issue => {
                          return <IssueCard
                                    id={issue.id}
                                    title={issue.title}
                                    assignee={issue.assignee}
                                    keyNumber={issue.keyNumber}
                                    status={issue.status}
                                    genre={issue.genre}
                                    priority={issue.priority}
                                    key={issue.id} 
                                  />
                        }) :
                        <Typography variant="body2" component="p">
                          当前泳道为空
                        </Typography>
                    }
                  </Stack>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <Tab label="Done" disabled/>
                  <Stack direction="column" spacing={2}>
                    {
                      dones.length > 0 ?
                        dones.map(issue => {
                          return <IssueCard
                                    id={issue.id}
                                    title={issue.title}
                                    assignee={issue.assignee}
                                    keyNumber={issue.keyNumber}
                                    status={issue.status}
                                    genre={issue.genre}
                                    priority={issue.priority}
                                    key={issue.id} 
                                  />
                        }) :
                        <Typography variant="body2" component="p">
                          当前泳道为空
                        </Typography>
                    }
                  </Stack>
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
