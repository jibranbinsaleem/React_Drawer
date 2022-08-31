import * as React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import settings from '../images/settings.png'
import impex from "../images/impex.png"
import analysis from "../images/analysis.webp"
import ea from "../images/EnterpriseArchitecture.svg"
import { Link } from "react-router-dom"
import './styles/drawer.css'
import { connect } from 'react-redux'
import { useTheme } from '@mui/material/styles';

function TemporaryDrawer(props) {

  let { theme } = props;
  const appTheme = useTheme();

  const list = (anchor) => (
    <Box


      onClick={props.toggleDrawer(anchor, false)}
      onKeyDown={props.toggleDrawer(anchor, false)}

    >
      <List>

        <ListItem disablePadding>
          <Tooltip title="Eaxee Administration" placement="right">
            <Link to="admin">
              <ListItemButton onClick={() => props.changepage("Administration")}>
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
            </Link>

          </Tooltip>

        </ListItem>
        <Divider />
        <ListItem onClick={() => props.changepage("Impex")} disablePadding>
          <Tooltip title="Eaxee Impex" placement="right">
            <Link to="impex">
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
            </Link>
          </Tooltip>
        </ListItem>
        <Divider />

        <ListItem disablePadding>
          <Tooltip title="Eaxee Enterprise Architecture" placement="right">
            <Link to="enterprise">
              <ListItemButton onClick={() => props.changepage("Enterprise Architecture")}>
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
            </Link>
          </Tooltip>
        </ListItem>

        <Divider />
        <ListItem disablePadding>
          <Tooltip title="Eaxee Organization Portal" placement="right">
            <Link to="portal">
              <ListItemButton onClick={() => props.changepage("Organization Portal")}>
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
            </Link>
          </Tooltip>
        </ListItem>
        <Divider />


      </List>


    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            PaperProps={{
              sx: { background: (theme === "default" ? `${appTheme.pallete.primary.main}`: theme === 'light'? '#D3D3D3' : ""), height: "50%", marginTop: 20, borderRadius: 2, width: "5%" },
            }}

            open={props.state[anchor]}

            onClose={props.toggleDrawer(anchor, false)}
            anchor={props.lang === 'en' ? 'left' : 'right'}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TemporaryDrawer)