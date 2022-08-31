import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import TreeItem from '@mui/lab/TreeItem';
import { connect } from 'react-redux';

function Tree( props ) {

  let { language, theme } = props
  // console.log(language)
  return (
    
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}

      defaultExpandIcon = {(language === "en" ? <ChevronRightIcon /> : <ChevronLeftIcon />)}
      sx={{ flexGrow: 1, color:(theme === "dark" ? '#ffffffb3': "")}}

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

export default connect(mapStateToProps, mapDispatchToProps)(Tree)
