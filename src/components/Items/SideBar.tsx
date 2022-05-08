import React, {useState} from "react";
import { Avatar, Box, Collapse, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";

import { useNavigate } from "react-router-dom"
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import CodeIcon from "@mui/icons-material/Code";
import StringAvatar from "../Functions/StringAvatar";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const SideBar = () => {

  const [plan, setPlan] = useState(true);
  const [dev, setDev] = useState(true);

  const codeUrl = localStorage.getItem("codeUrl") || "";
  const organizationName = localStorage.getItem("organizationName") || "";

  const navigate = useNavigate();

  const handlePlanClick = () => {
    setPlan(!plan);
  };

  const handleDevClick = () => {
    setDev(!dev);
  };

  const toCode = () => {
    window.open(codeUrl, "_blank")
  }
  return (
    <Drawer
    variant="permanent"
    sx={{
      width: 240,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
    }}
  >
    <Toolbar />
    <Box sx={{ overflow: "auto" }}>
      <List>
        <ListItem sx={{ pl: 4, mt: 2 }}>
          <ListItemIcon>
            <Avatar {...StringAvatar(organizationName)} />
          </ListItemIcon>
          <ListItemText primary={organizationName} />
        </ListItem>
      </List>
      {/* Planning */}
      <List>
        <ListItemButton onClick={handlePlanClick}>
          <ListItemText primary="计划看板" />
          {plan ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={plan} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 6 }} onClick={ () => {navigate("/backlog")} }>
              <ListItemIcon>
                <ListAltIcon />
              </ListItemIcon>
              <ListItemText primary="待办"/>
            </ListItemButton>

            <ListItemButton sx={{ pl: 6 }} onClick={ () => {navigate("/")} } >
              <ListItemIcon>
                <ViewWeekIcon />
              </ListItemIcon>
              <ListItemText primary="当前冲刺"/>
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }} onClick={ () => {navigate("/members")} }>
              <ListItemIcon>
                <PeopleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="所有成员" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }} onClick={ () => {navigate("/roles")} }>
              <ListItemIcon>
                <PermIdentityIcon />
              </ListItemIcon>
              <ListItemText primary="权限设置" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      {/* Planning */}
      <Divider />
      {/* Development */}
      <List>
        <ListItemButton onClick={handleDevClick}>
          <ListItemText primary="开发相关" />
          {dev ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={dev} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={toCode}>
              <ListItemIcon>
                <CodeIcon />
              </ListItemIcon>
              <ListItemText primary="团队代码库" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      {/* Development */}

      <Divider />
    </Box>
  </Drawer>
  )
}

export default SideBar;