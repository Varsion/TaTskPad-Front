import * as React from 'react';
import {
  Box, Drawer, Toolbar, List, Divider, ListItemButton,
  ListItem, ListItemIcon, ListItemText, Avatar, Collapse
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

import StringAvatar from '../../components/Functions/StringAvatar';
import Board from './Pages/Board';

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
    <Board />
  </Box>
  )
}
