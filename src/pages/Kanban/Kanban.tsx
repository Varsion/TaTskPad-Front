import * as React from 'react';
import {
  Box, Drawer, Toolbar, List, Typography, Divider, 
  ListItem, ListItemIcon, ListItemText, Avatar, ListItemButton,
  Collapse
} from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import WidgetsIcon from '@mui/icons-material/Widgets';

import StringAvatar from '../../components/Functions/StringAvatar';


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
        <ListItem sx={{ pl: 3, mt: 2 }}>
          <ListItemIcon>
            <Avatar {...StringAvatar('Chong Yaa')} />
          </ListItemIcon>
          <ListItemText primary={'ChongYaaa'} />
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
      {/* Development */}

      <Divider />
    </Box>
    </Drawer>
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
        Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
        nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
        leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
        feugiat vivamus at augue. At augue eget arcu dictum varius duis at
        consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
        sapien faucibus et molestie ac.
      </Typography>
    </Box>
  </Box>
  )
}
