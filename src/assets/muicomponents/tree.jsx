import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import TreeItem from '@mui/lab/TreeItem';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

export default function Tree( props ) {
  let { lang } = props;
  return (
    // // <SplitterLayout percentage="true" secondaryInitialSize={(lang == 'en' ? '80' : '20')} customClassName='splitter'>
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon sx={{border: '2px solid red'}}/>}

      defaultExpandIcon = {(lang == "en" ? <ChevronRightIcon sx={{border: '2px solid' }}/> : <ChevronLeftIcon sx={{border: '2px solid' }}/>)}
      sx={{ flexGrow: 1, border: '2px solid'}}
    >
      <TreeItem nodeId="1" label="Applications" >
        <TreeItem nodeId="2" label="Calendar" />
      </TreeItem>
      <TreeItem nodeId="5" label="Documents">
        <TreeItem nodeId="10" label="OSS" />
        <TreeItem nodeId="6" label="MUI">
          <TreeItem nodeId="8" label="index.js" />
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
}
