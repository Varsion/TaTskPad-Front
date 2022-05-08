import React, { useEffect } from "react";
import {
  Box,
  Breadcrumbs,
  Grid,
  Link,
  Stack,
  Tab,
  TextField,
  Toolbar,
  Typography,
  Paper,
  styled,
  Button,
} from "@mui/material";
import HeaderBar from "../../components/Items/HeaderBar";
import SideBar from "../../components/Items/SideBar";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { NotifyError, NotifySuccess } from "../../components/Notify";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router";
import { GET_CURRENT_SPRINT } from "../../actions/sprint";
import IssueCard from "../../components/Issue/IssueCard";
import "./kanban.css";
import DragList from "../../components/dragAnddrop/DragList";
const defaultValues: IssueType[] = [
  {
    id: "1",
    title: "hello-1",
    author: {
      name: "John",
      avatar: "https://avatars0.githubusercontent.com/u/174825?s=460&v=4",
    },
    keyNumber: "KEY-1",
    status: "TODO",
    genre: "bug",
    priority: "p1",
  },
  {
    id: "2",
    title: "hello-2",
    author: {
      name: "John",
      avatar: "https://avatars0.githubusercontent.com/u/174825?s=460&v=4",
    },
    keyNumber: "KEY-2",
    status: "TODO",
    genre: "story",
    priority: "p1",
  },
  {
    id: "3",
    title: "hello-3",
    author: {
      name: "John",
      avatar: "https://avatars0.githubusercontent.com/u/174825?s=460&v=4",
    },
    keyNumber: "KEY-3",
    status: "TODO",
    genre: "story",
    priority: "p1",
  },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface IssueType {
  id: string;
  title: string;
  author: AccountType;
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

export const Kanban = () => {
  const navigate = useNavigate();
  const projectId = localStorage.getItem("projectId");

  const { data, loading, error } = useQuery(GET_CURRENT_SPRINT, {
    variables: {
      projectId,
    },
  });

  const sprint = data?.project?.currentSprint;
  const issues = sprint?.issueList?.issues;

  useEffect(() => {
    if (sprint) {
      console.log(sprint);
    }
    if (issues) {
      console.log(issues);
      if (issues.length === 0) {
        NotifyError("Current Sprint has no issues");
      }
    }
  }, [sprint, issues]);

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
          <Link
            underline="hover"
            color="text.primary"
            href="/#/"
            aria-current="page"
          >
            Sprint Board
          </Link>
        </Breadcrumbs>
        <Box sx={{ display: "flex", flexGrow: 1, mt: 3 }}>
          <Grid container spacing={2}>
            {/* Header */}
            <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h4" component="h2">
                {sprint ? sprint.name + " " + sprint.version : "None"}
              </Typography>
            </Grid>
            <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
              {/* <TextField fullWidth id="outlined-basic" label="Search in Current Board" variant="outlined" size="small"/> 
              <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5, fontSize:30 }} /> */}
            </Grid>
            <Grid item xs={2}>
              <Stack direction="row-reverse" spacing={1}>
                <Button
                  variant="contained"
                  size="small"
                  endIcon={<DoneAllIcon />}
                >
                  Finish
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  endIcon={<AddIcon />}
                  onClick={() => navigate("/issue/create")}
                >
                  Create
                </Button>
              </Stack>
            </Grid>
            {/* Header */}
            <Grid container spacing={6}>
              <Box className="DragList">
                <DragList />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
