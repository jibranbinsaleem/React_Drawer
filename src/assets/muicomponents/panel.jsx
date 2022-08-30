import React, { useEffect } from 'react';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import EaTabs from './enterprisetabs';
import '../muicomponents/styles/splitter.css'
import { connect } from 'react-redux';



const Panel = (props) => {
  let { language } = props;

  useEffect(() => {
    console.log("panel", language);
  }, [language])


  return (
    <SplitterLayout percentage="true" secondaryInitialSize='80' customClassName='splitter'>
      <div><EaTabs /></div>
      <div>EaTabs: {language}</div>
    </SplitterLayout>
  );
}

const mapStateToProps = state => {
  return {
    language: state.language,
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

export default connect(mapStateToProps, mapDispatchToProps)(Panel)
