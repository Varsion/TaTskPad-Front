import * as React from 'react';
import {
  IconButton, Box, AppBar, 
  Toolbar, List, Typography, ListItem, ListItemText
} from '@mui/material';

import AccountCircle from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';

import SearchItem from "../../components/Items/SearchItem"

const HeaderBar = () => {
  return (
    <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 1 }}
        >
          <ViewKanbanIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          TaTskPad
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, mx: 1  }}>
          <List sx={{ display: { xs: 'none', md: 'flex' } }}>
          <ListItem button key={'Organizations'}>
              <ListItemText primary={'Organizations'}>
                Organizations
              </ListItemText>
            </ListItem>
            <ListItem button key={'Projects'}>
              <ListItemText primary={'Projects'}>
                Projects
              </ListItemText>
            </ListItem>
            <ListItem button key={'Members'}>
              <ListItemText primary={'Members'}>
                Members
              </ListItemText>
            </ListItem>
            <ListItem button key={'KnowledgeBase'}>
              <ListItemText primary={'KnowledgeBase'}>
                KnowledgeBase
              </ListItemText>
            </ListItem>
          </List>
        </Box>
        <SearchItem />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton
            size="large"
            color="inherit"
          >
            <SettingsIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderBar