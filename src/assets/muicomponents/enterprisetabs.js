import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider'
// import Panel from './panel'
import Tree from './tree'
import './styles/panel.css'
import TextField from '@mui/material/TextField';



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
    <Box>
      <Box sx={{ paddingTop: 1 }}>
        <TextField id="outlined-basic" label="Filter" variant="outlined" size="small" />
      </Box>
      <Box style={tabStyle} sx={{ height: '100%', borderBottom: 1, borderColor: 'divider' }} >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ fontSize: "1px" }}>
          <Tab label="Objects" {...a11yProps(0)} sx={{ minWidth: 0.2, width: 20, fontSize: 12 }} />
          <Divider orientation="vertical" />
          <Tab label="Models" {...a11yProps(1)} sx={{ minWidth: 0.2, width: 20, fontSize: 12 }} />
          <Tab label="Tab3" {...a11yProps(1)} sx={{ minWidth: 0.2, width: 20, fontSize: 12 }} />
          <Tab label="Tab4" {...a11yProps(1)} disabled sx={{ minWidth: 0.2, width: 20, fontSize: 12 }} />
          <Tab label="Tab5" {...a11yProps(1)} disabled sx={{ minWidth: 0.2, width: 20, fontSize: 12 }} />

        </Tabs>
      </Box>


      <TabPanel value={value} index={0} >


        <Tree />
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
