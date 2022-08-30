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

<<<<<<< HEAD
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';



export default function ButtonAppBar(props) {

  let { lang, setLang } = props;

  const dispatch = useDispatch();
  const reducer = useSelector(state => state)
=======
import { useSelector, useDispatch, connect } from 'react-redux';



function ButtonAppBar(props) {
  // const dispatch = useDispatch();
  // const reducer = useSelector(state => state)

  let { setLanguage, language } = props
>>>>>>> 8372cf607deef61d989233297f8e46fd234c90cb

  // const [lang, setLang] = useState(reducer.language)

  const toolbarStyle = {
    minHeight: '44px',
  };

  const testFunc = () => {

    setLanguage(language)

    setLang(reducer.language)



  }

<<<<<<< HEAD
  // useEffect(() => { }, [])
=======
  React.useEffect(() => {
    console.log("appbar:", props);
  }, [language])

>>>>>>> 8372cf607deef61d989233297f8e46fd234c90cb

  return (


    <Box>
      {/* appBar: {lang} */}
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
          <Box sx={{ flexGrow: 1, marginLeft: "10px", marginTop: "8px" }}>
            <Typography sx={{ fontSize: "24px" }}>
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