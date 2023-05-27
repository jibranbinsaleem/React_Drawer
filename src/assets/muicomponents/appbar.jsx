import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from "../images/no_bg_logo.png"
import arabic from "../images/arabic.png"
import logout from "../images/logout.png"
import { Link } from "react-router-dom"
import '../muicomponents/styles/appbar.css'
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { connect } from 'react-redux';
import AlertDialog from './logout';



function ButtonAppBar(props) {
  // const dispatch = useDispatch();
  // const reducer = useSelector(state => state)

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let { setLanguage, language , theme } = props

  const toolbarStyle = {
    minHeight: '44px',
  };

  const testFunc = () => {

    setLanguage(language)
    console.log(language)
  }

  React.useEffect(() => {
    // console.log("appbar:", props);
  }, [language])

  const appTheme = useTheme();
  // console.log(appTheme.pallete.primary.main)




  return (


    <Box>
      <AppBar position="static" >

        <Toolbar
          sx={{ background: (theme === "default" ? `${appTheme.pallete.primary.main}`: theme === 'light'? '#D3D3D3' : ""), height: 30, display: "flexbox", alignContent: 'center' }}
          style={toolbarStyle}>

          {/* <Box sx={{flexGrow:1}} >
          <img src = {logo} sx={{maxWidth:1, maxHeight:1, width: 1}}/>
           </Box> */}


          <Button onClick={props.toggleDrawer('left', true)} >
            <MenuIcon style={{ fill: (theme === "dark" ? "white": "black") }} fontSize="large" />
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
          <Box sx={{ flexGrow: 1 , marginLeft: "10px", marginTop: "8px"}}>
            <Typography sx={{ fontSize: "24px" }} color={(theme === "light" ? "black": "white")}>
              {props.text}
            </Typography>
          </Box>



          <Button >
            <Box
              component="img"
              sx={{

                height: 34,

              }}
              alt="Change Language"
              src={arabic}
              onClick={() => testFunc()}
            />
          </Button >
          <Button>
          <Box
            component="img"
            sx={{
              
              height: 34,

            }}
            alt="Logout"
            src={logout}
            onClick={handleClickOpen}
          />
          </Button>
   
      <AlertDialog open={open} handleClose = {handleClose} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const mapStateToProps = state => {
  return {
    language: state.language,
    theme: state.theme
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLanguage: (lang) => {
      return dispatch({
        type: "TOGGLELANG",
        value: (lang === 'en') ? 'ar' : "en"
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAppBar)