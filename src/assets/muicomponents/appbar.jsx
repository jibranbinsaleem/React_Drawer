import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from "../images/no_bg_logo.png"
import { flexbox, maxWidth } from '@mui/system';
import arabic from "../images/arabic.png"
import logout from "../images/logout.png"
import { Link } from "react-router-dom"
import '../muicomponents/styles/appbar.css'
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';

import { useSelector, useDispatch, connect } from 'react-redux';



function ButtonAppBar(props) {
  // const dispatch = useDispatch();
  // const reducer = useSelector(state => state)

  let { setLanguage, language } = props

  const toolbarStyle = {
    minHeight: '44px',
  };

  const testFunc = () => {

    setLanguage(language)
    console.log(language)
  }

  React.useEffect(() => {
    console.log("appbar:", props);
  }, [language])


  return (


    <Box>
      <AppBar position="static" >

        <Toolbar
          sx={{ background: '#0D7E8A', height: 30, display: "flexbox", alignContent: 'center' }}
          style={toolbarStyle}>

          {/* <Box sx={{flexGrow:1}} >
          <img src = {logo} sx={{maxWidth:1, maxHeight:1, width: 1}}/>
           </Box> */}


          <Button onClick={props.toggleDrawer('left', true)} >
            <MenuIcon style={{ fill: "#000000" }} fontSize="large" />
          </Button>
          <Link to="/">
            <Tooltip title="Home" placement="right">
              <Box
                component="img"
                sx={{ height: 44 }}
                alt="Eaxee logo."
                src={Logo}
                onClick={() => props.changepage("Home")}
              />
            </Tooltip>
          </Link>
          <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ fontSize: "20px" }}>
              {props.text}
            </Typography>
          </Box>



          <Button onClick={() => testFunc()}>
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

const mapStateToProps = state => {
  return {
    language: state.language
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLanguage: (lang) => {
      return dispatch({
        type: "TOGGLELANG",
        value: (lang == 'en') ? 'ar' : "en"
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAppBar)