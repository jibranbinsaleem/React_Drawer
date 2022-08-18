import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from "../images/no_bg_logo.png"
import Link from '@mui/material/Link';
import { maxWidth } from '@mui/system';
import arabic from "../images/arabic.png"


export default function ButtonAppBar() {
 
    const toolbarStyle = {
        minHeight: '44px',
      };  

  return (
    
      
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar
        sx={{background: '#0D7E8A', height : 30}}
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
        <Box
            component="img"
            sx={{
            
            height: 34,
            
            }}
            alt="Your logo."
            src={arabic}
        />   
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
