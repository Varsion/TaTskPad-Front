import * as React from 'react';
import {
  Box, Drawer, Toolbar, List, Divider, ListItemButton,
  ListItem, ListItemIcon, ListItemText, Avatar, styled,
  Collapse, Breadcrumbs, Link, TextField, Grid, Paper,
  Button, Typography, Stack, Tab, Card, CardActions, CardContent,
  Chip,
} from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import WidgetsIcon from '@mui/icons-material/Widgets';
import CodeIcon from '@mui/icons-material/Code';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SearchIcon from '@mui/icons-material/Search';
import ShareIcon from '@mui/icons-material/Share';
import DoneAllIcon from '@mui/icons-material/DoneAll';

import StringAvatar from '../../components/Functions/StringAvatar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Kanban() {

  const [plan, setPlan] = React.useState(true);
  const [dev, setDev] = React.useState(true);

  const handlePlanClick = () => {
    setPlan(!plan);
  };

  const handleDevClick = () => {
    setDev(!dev);
  };

  return(
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
      }}
    >
    <Toolbar />
    <Box sx={{ overflow: 'auto' }}>
      <List>
        <ListItem sx={{ pl: 4, mt: 2 }}>
          <ListItemIcon>
            <Avatar {...StringAvatar('Chong Yaa')} />
          </ListItemIcon>
          <ListItemText primary={'ChongYaa ORG'} />
        </ListItem>
      </List>
      {/* Planning */}
      <List>
        <ListItemButton onClick={handlePlanClick}>
          <ListItemText primary="Planning" />
          {plan ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={plan} timeout="auto" unmountOnExit>

          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 6 }}>
              <ListItemIcon>
                <MapIcon />
              </ListItemIcon>
              <ListItemText primary="Route Map" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 6 }}>
              <ListItemIcon>
                <ListAltIcon />
              </ListItemIcon>
              <ListItemText primary="ToDo List" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 6 }}>
              <ListItemIcon>
                <ViewWeekIcon />
              </ListItemIcon>
              <ListItemText primary="Sprint" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 6 }}>
              <ListItemIcon>
                <AutoGraphIcon />
              </ListItemIcon>
              <ListItemText primary="Report" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <CorporateFareIcon />
              </ListItemIcon>
              <ListItemText primary="Matters" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <WidgetsIcon />
              </ListItemIcon>
              <ListItemText primary="Blocks" />
            </ListItemButton>
          </List>

        </Collapse>
      </List>
      {/* Planning */}
      <Divider />
      {/* Development */}
      <List>
        <ListItemButton onClick={handleDevClick}>
          <ListItemText primary="Development" />
          {dev ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={dev} timeout="auto" unmountOnExit>

          <List component="div" disablePadding>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <CodeIcon />
              </ListItemIcon>
              <ListItemText primary="Codes" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <AccountTreeIcon />
              </ListItemIcon>
              <ListItemText primary="Releases" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      {/* Development */}

      <Divider />
    </Box>
    </Drawer>
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
              <Button variant="contained" size="small" endIcon={<ShareIcon />}>
                Share
              </Button>
            </Stack>
          </Grid>
          {/* Header */}

          <Grid item xs={4}>
            <Item>
              <Tab label="ToDo" disabled/>

              <Card variant="outlined" sx={{textAlign: 'left'}}>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Login Function Request
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Login Function Request
                  Login Function Request
                  Login Function Request
                </Typography>

                </CardContent>
                <CardActions>
                  <Chip label="JOB-301" variant="outlined"/>
                  <Chip label="8" />
                  <Avatar></Avatar>
                </CardActions>
              </Card>
              <br />
              <Card variant="outlined" sx={{textAlign: 'left'}}>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Login Function Request
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Login Function Request
                  Login Function Request
                  Login Function Request
                </Typography>

                </CardContent>
                <CardActions>
                  <Chip label="JOB-301" variant="outlined"/>
                  <Chip label="8" />
                  <Avatar></Avatar>
                </CardActions>
              </Card>
              <br />
              <Card variant="outlined" sx={{textAlign: 'left'}}>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Login Function Request
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Login Function Request
                  Login Function Request
                  Login Function Request
                </Typography>

                </CardContent>
                <CardActions>
                  <Chip label="JOB-301" variant="outlined"/>
                  <Chip label="8" />
                  <Avatar></Avatar>
                </CardActions>
              </Card>
              <br />
              <Card variant="outlined" sx={{textAlign: 'left'}}>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Login Function Request
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Login Function Request
                  Login Function Request
                  Login Function Request
                </Typography>

                </CardContent>
                <CardActions>
                  <Chip label="JOB-301" variant="outlined"/>
                  <Chip label="8" />
                  <Avatar></Avatar>
                </CardActions>
              </Card>

            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Tab label="Doing" disabled/>

              <Card variant="outlined" sx={{textAlign: 'left'}}>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Login Function Request
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Login Function Request
                  Login Function Request
                  Login Function Request
                </Typography>

                </CardContent>
                <CardActions>
                  <Chip label="JOB-301" variant="outlined"/>
                  <Chip label="8" />
                  <Avatar></Avatar>
                </CardActions>
              </Card>
              <br />
              <Card variant="outlined" sx={{textAlign: 'left'}}>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Login Function Request
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Login Function Request
                  Login Function Request
                  Login Function Request
                </Typography>

                </CardContent>
                <CardActions>
                  <Chip label="JOB-301" variant="outlined"/>
                  <Chip label="8" />
                  <Avatar></Avatar>
                </CardActions>
              </Card>
              <br />
              <Card variant="outlined" sx={{textAlign: 'left'}}>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Login Function Request
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Login Function Request
                  Login Function Request
                  Login Function Request
                </Typography>

                </CardContent>
                <CardActions>
                  <Chip label="JOB-301" variant="outlined"/>
                  <Chip label="8" />
                  <Avatar></Avatar>
                </CardActions>
              </Card>
              <br />
              <Card variant="outlined" sx={{textAlign: 'left'}}>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Login Function Request
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Login Function Request
                  Login Function Request
                  Login Function Request
                </Typography>

                </CardContent>
                <CardActions>
                  <Chip label="JOB-301" variant="outlined"/>
                  <Chip label="8" />
                  <Avatar></Avatar>
                </CardActions>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Tab label="Done" disabled/>

              <Card variant="outlined" sx={{textAlign: 'left'}}>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Login Function Request
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Login Function Request
                  Login Function Request
                  Login Function Request
                </Typography>

                </CardContent>
                <CardActions>
                  <Chip label="JOB-301" variant="outlined"/>
                  <Chip label="8" />
                  <Avatar></Avatar>
                </CardActions>
              </Card>
              <br />
              <Card variant="outlined" sx={{textAlign: 'left'}}>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Login Function Request
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Login Function Request
                  Login Function Request
                  Login Function Request
                </Typography>

                </CardContent>
                <CardActions>
                  <Chip label="JOB-301" variant="outlined"/>
                  <Chip label="8" />
                  <Avatar></Avatar>
                </CardActions>
              </Card>
              <br />
              <Card variant="outlined" sx={{textAlign: 'left'}}>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Login Function Request
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Login Function Request
                  Login Function Request
                  Login Function Request
                </Typography>

                </CardContent>
                <CardActions>
                  <Chip label="JOB-301" variant="outlined"/>
                  <Chip label="8" />
                  <Avatar></Avatar>
                </CardActions>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Box>
  )
}
