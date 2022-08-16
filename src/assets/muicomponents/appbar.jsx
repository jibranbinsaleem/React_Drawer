import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from "../images/no_bg_logo.png"
import Link from '@mui/material/Link';
import { maxWidth } from '@mui/system';


export default function ButtonAppBar() {
 
    const toolbarStyle = {
        minHeight: '30px',
      };  

  return (
    
      
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar
        sx={{background: '#0c1a40', height : 20}}
        style={toolbarStyle}>

          {/* <Box sx={{flexGrow:1}} >
          <img src = {logo} sx={{maxWidth:1, maxHeight:1, width: 1}}/>
           </Box> */}
           <Box sx={{flexGrow:1}}>
          <Box
            component="img"
            sx={{
            
            height: 44,
            
            }}
            alt="Your logo."
            src={Logo}
        />   
        </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
