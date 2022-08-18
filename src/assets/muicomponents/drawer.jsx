import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/no_bg_logo.png'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import impex from "../images/impex.png"
import analysis from "../images/analysis.webp"
import ea from "../images/EnterpriseArchitecture.svg"

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const data =[{"text":"Eaxee Administration", "icon":"<ManageAccountsIcon />"},{"text":"impex", "icon":"<ManageAccountsIcon />"}]
  const list = (anchor) => (
    <Box
      sx={{ width:25}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      
    >
      <List>
        
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
              <ManageAccountsIcon fontSize='large'/>
              </ListItemIcon>
              
            </ListItemButton>
            
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
              <Box
            component="img"
            sx={{
            
            height: 33,
            
            }}
            alt="Your logo."
            src={impex}
        /> 
              </ListItemIcon>
              
            </ListItemButton>
            
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
              <Box
            component="img"
            sx={{
            
            height: 33,
            
            }}
            alt="Your logo."
            src={ea}
        /> 
              </ListItemIcon>
              
            </ListItemButton>
            
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
              <Box
            component="img"
            sx={{
            
            height: 33,
            
            }}
            alt="Your logo."
            src={analysis}
        /> 
              </ListItemIcon>
              
            </ListItemButton>
            
          </ListItem>
          
      </List>

      
    </Box>
  );

  return (
    <div>
      {['OPEN'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon style={{fill: "#0D7E8A"}} fontSize="large"/></Button>
          <Drawer
            PaperProps={{
              sx: { background: '#0D7E8A', height: "50%" , marginTop:20, borderRadius: 2, width:"6%"},
            }}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            dir = "rtl"
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}