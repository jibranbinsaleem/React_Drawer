import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Panel from './panel'
import Panelar from './panelar'

import { connect } from 'react-redux';

import './styles/panel.css'



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BasicTabs(props) {
  const [value, setValue] = useState(0);

  let { language } = props

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  useEffect(() => {


    console.log("tabs", props)
  }, [language])

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="My Enterprise" {...a11yProps(0)} />
          <Tab label="My Page" {...a11yProps(1)} />

        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {
          (language == 'en') ?
            <>
              <Panel />
            </> :
            <>
              <Panelar />
            </>

        }
      </TabPanel>
      <TabPanel value={value} index={1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan volutpat porttitor. Curabitur in viverra orci. Suspendisse est neque, aliquet fermentum nisi tristique, egestas accumsan mauris. Etiam nisi nibh, sodales non enim at, rutrum tincidunt orci. Etiam vel euismod odio. Aliquam in erat magna. Nam ipsum ex, molestie ac ante non, suscipit suscipit lorem. Mauris bibendum, mauris sit amet viverra varius, sapien magna pellentesque arcu, sed pharetra neque libero quis nunc. Mauris egestas nisi purus, ut tristique eros aliquet sed. Aliquam erat volutpat. Cras posuere sollicitudin sapien. Proin lacinia, tellus ac finibus placerat, leo neque posuere libero, id luctus elit turpis et sem. Donec ligula elit, dapibus vitae aliquet sit amet, euismod in odio.

        Donec ac diam nulla. Aenean commodo odio at mollis molestie. Nulla eget venenatis mi, et maximus elit. Donec odio est, facilisis at ante quis, pharetra semper est. Nullam egestas, urna non finibus convallis, dolor dolor ullamcorper nisl, vel dictum orci ligula vel metus. Phasellus pretium quam metus, ut lobortis massa cursus vitae. Suspendisse porttitor lacus quis leo tincidunt, non tincidunt tortor ornare. Curabitur convallis eu urna ut congue. Sed ut tincidunt est, quis bibendum justo. Donec eu sollicitudin neque, id consequat justo. Nulla dignissim vehicula turpis in tincidunt. Suspendisse a nisi quam. Integer venenatis at nibh ut elementum. Sed gravida velit quis ipsum finibus pretium a elementum lacus. Praesent accumsan enim id odio dignissim lacinia. Mauris quam diam, mattis quis molestie sit amet, hendrerit vitae mauris.

        Aliquam posuere purus quis nunc vestibulum, vel porta massa commodo. Praesent at ipsum eu erat luctus aliquam. Nulla gravida arcu sit amet eleifend condimentum. Nullam maximus metus ac lacus convallis laoreet. Etiam facilisis leo id erat mollis placerat. Sed vitae elit massa. Quisque in lorem vel ipsum eleifend convallis. Fusce eu enim non lorem egestas cursus et vel dolor. Morbi consequat lectus nec finibus dignissim. Pellentesque dignissim ullamcorper velit, eget luctus libero posuere eget. Cras et justo nec tortor eleifend pretium.

        Nunc ante purus, blandit sed ornare sit amet, porta ac metus. Nullam ut ex nec risus molestie maximus eu faucibus nulla. Praesent facilisis cursus mollis. Vestibulum varius lacus quis massa accumsan bibendum. Fusce fermentum venenatis est, vel maximus sem suscipit vel. Fusce vehicula elit dolor, eu auctor ante iaculis ac. Quisque sem nisl, aliquam et ultricies sed, bibendum quis sem. Etiam in ullamcorper nisl.

        Phasellus sed dolor nec dolor rutrum consequat. Aliquam auctor enim dolor, in interdum augue volutpat non. Duis quis ullamcorper mi, quis iaculis diam. Cras ac metus nec orci bibendum auctor. Aenean venenatis, sapien imperdiet tincidunt vulputate, libero mauris accumsan magna, at tincidunt nulla lorem at enim. Etiam ut porta velit. Proin mauris ipsum, blandit sed iaculis tristique, fermentum sodales sapien. Cras id ornare ligula, nec ultrices neque. Etiam hendrerit lobortis nibh, a mollis nibh
      </TabPanel>

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

export default connect(mapStateToProps, mapDispatchToProps)(BasicTabs)
