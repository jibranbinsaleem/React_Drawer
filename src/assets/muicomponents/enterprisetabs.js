import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Panel from './panel'

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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

export default function EaTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyle = {
    minHeight: '2px',
  };  

  return (
    <Box sx={{ width: '100%' }}>
      <Box  style={tabStyle} sx={{ borderBottom: 2, borderColor: 'divider'}} >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{fontSize:"1px"}}>
          <Tab label="Objects" {...a11yProps(0)}  sx={{Height:"1%"}}/>
          <Tab label="Models" {...a11yProps(1)} />
          <Tab label="Tab3" {...a11yProps(1)}/>
          <Tab label="Tab4" {...a11yProps(1)} disabled/>
          <Tab label="Tab5" {...a11yProps(1)} disabled/>
          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
      Item one x
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two x
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three x
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item four x
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item five x
      </TabPanel>
      
    </Box>
  );
}
