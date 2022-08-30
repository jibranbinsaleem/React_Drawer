
import BasicTabs from '../assets/muicomponents/tabs';
import { connect } from 'react-redux';
import React, { useEffect, } from 'react';

const Ea = (props) => {
  // const [lang, setLang] = useState('')
  let { language } = props



  useEffect(() => {
    console.log('Ea.js', language);
  }, [language])

  return (


    <div>
      <BasicTabs />
    </div>

  )
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
        value: (lang === 'en') ? 'ar' : "en"
      })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Ea)
