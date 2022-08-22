import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from "../images/no_bg_logo.png"
import { maxWidth } from '@mui/system';
import arabic from "../images/arabic.png"
import logout from "../images/logout.png"
import { Link } from "react-router-dom"
import  '../muicomponents/styles/appbar.css'


export default function ButtonAppBar( props ) {
 
    const toolbarStyle = {
        minHeight: '44px',
      };  

  return (
    
      
    <Box>
      <AppBar position="static" >
        <Toolbar
        sx={{background: '#0D7E8A', height : 30}}
        style={toolbarStyle}>

          {/* <Box sx={{flexGrow:1}} >
          <img src = {logo} sx={{maxWidth:1, maxHeight:1, width: 1}}/>
           </Box> */}

         
           
            <Link to="/">
          <Box
            component="img"
            sx={{
            
            height: 44,
            
            }}
            alt="Eaxee logo."
            src={Logo}
        />   
        </Link>
        <Box sx={{flexGrow:1}}>
         <Typography> 
          {props.text}
        </Typography>
        </Box>
       

        <Button 
        onClick={props.changelang}
        >

        
        <Box
            component="img"
            sx={{
            
            height: 34,
            
            }}
            alt="Change Language"
            src={arabic}
        />   
        </Button>
        
          <Box
            component="img"
            sx={{
            
            height: 34,
            
            }}
            alt="Logout"
            src={logout}
        />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
