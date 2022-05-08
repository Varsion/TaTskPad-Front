import * as React from 'react';
import {
  IconButton, Box, AppBar, Menu, MenuItem, 
  Toolbar, List, Typography, ListItem, ListItemText
} from '@mui/material';

import AccountCircle from '@mui/icons-material/AccountCircle';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import { useNavigate } from 'react-router';
import { ClearToken } from '../../components/Session';
import { NotifySuccess } from '../../components/Notify';

const HeaderBar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    NotifySuccess("Logout Success");
    ClearToken();
    navigate('/sign_in');
  }

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
          <ListItem button key={'Organizations'} onClick={ () => {navigate("/organization")} }>
              <ListItemText primary={'组 织'} sx={{width: 100}}>
                Organizations
              </ListItemText>
            </ListItem>
            <ListItem button key={'Projects'} onClick={ () => {navigate("/project")} }>
              <ListItemText primary={'项 目'} sx={{width: 100}}>
                Projects
              </ListItemText>
            </ListItem>
            <ListItem button key={'KnowledgeBase'} onClick={ () => {navigate("/knowledgebase")} }>
              <ListItemText primary={'知识库'} sx={{width: 100}}>
                KnowledgeBase
              </ListItemText>
            </ListItem>
          </List>
        </Box>
        {/* <SearchItem /> */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            onClick={handleClick}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={ () => {navigate("/account")} }>账户详情</MenuItem>
            <MenuItem onClick={logout}>登出</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderBar