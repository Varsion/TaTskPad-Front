import * as React from 'react';
import {
  Box, Toolbar, styled, Paper,
  Breadcrumbs, Link, TextField, Grid,
  Button, Typography, Stack, Tab, Collapse
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Board() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
    <Toolbar />
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/#/">
        Projects
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/#/"
      >
        TaTskPad
      </Link>
      <Link
        underline="hover"
        color="text.primary"
        href="/#/"
        aria-current="page"
      >
        Master Board
      </Link>
    </Breadcrumbs>
    <Box sx={{ display: 'flex', flexGrow: 1, mt:3 }}>

      <Grid container spacing={2}>

        {/* Header */}
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h4" component="h2">
            Sprint 1
          </Typography>
        </Grid>
        <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField fullWidth id="outlined-basic" label="Search in Current Board" variant="outlined" size="small"/> 
          <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5, fontSize:30 }} />
        </Grid>
        <Grid item xs={2}>
          <Stack direction="row-reverse" spacing={1}>
            <Button variant="contained" size="small" endIcon={<DoneAllIcon />}>
              Finish
            </Button>
            <Button variant="contained" size="small" endIcon={<AddIcon />}>
              Create
            </Button>
          </Stack>
        </Grid>
        {/* Header */}
        <Grid item xs={4}>
          <Item>
            <Tab label="ToDo" disabled/>

          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Tab label="Doing" disabled/>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Tab label="Done" disabled/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  </Box>
  )
}