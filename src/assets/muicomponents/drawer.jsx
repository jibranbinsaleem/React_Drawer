import * as React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import settings from '../images/settings.png'
import impex from "../images/impex.png"
import analysis from "../images/analysis.webp"
import ea from "../images/EnterpriseArchitecture.svg"

export default function TemporaryDrawer ( {lang} ) {
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


      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      
    >
      <List>
        
          <ListItem>
          <Tooltip title="Eaxee Administration" placement="right">
            <ListItemButton>
              <ListItemIcon>
              <Box
            component="img"
            sx={{
            
            height: 33,
            
            }}
            alt="Account management"
            src={settings}
        /> 
        

              </ListItemIcon>
              
            </ListItemButton>
            </Tooltip>
            
          </ListItem>
          <Divider />
          <ListItem >
          <Tooltip title="Eaxee Impex" placement="right">
            <ListItemButton>
              <ListItemIcon>
              <Box
            component="img"
            sx={{
            
            height: 33,
            
            }}
            alt="Eaxee Impex"
            src={impex}
        /> 
              </ListItemIcon>
              
            </ListItemButton>
            </Tooltip>
          </ListItem>
          <Divider />
          <ListItem>
          <Tooltip title="Eaxee Enterprise Architecture" placement="right">
            <ListItemButton>
              <ListItemIcon>
              <Box
            component="img"
            sx={{
            
            height: 33,
            
            }}
            alt="Eaxee Enterprise Architecture"
            src={ea}
        /> 
              </ListItemIcon>
              
            </ListItemButton>
            </Tooltip>
          </ListItem>
          <Divider />
          <ListItem>
          <Tooltip title="Eaxee Organization Portal" placement="right">
            <ListItemButton>
              <ListItemIcon>
              <Box
            component="img"
            sx={{
            
            height: 33,
            
            }}
            alt="Analysis"
            src={analysis}
        /> 
              </ListItemIcon>
              
            </ListItemButton>
            </Tooltip>
          </ListItem>
          <Divider />

          
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
            anchor = { lang === 'en' ? 'left' : 'right' }
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}