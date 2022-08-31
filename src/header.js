
import { Helmet } from 'react-helmet';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TemporaryDrawer from './assets/muicomponents/drawer';
import ButtonAppBar from './assets/muicomponents/appbar';

const Header = (props) => {

  let { language, theme} = props

  useEffect(() => {
 
  }, [])

  const [Page, setPage] = useState("Home");

  const changepage = (text) => {
    // console.log(text);
    setPage(text)
  };

  const [drawer, setDrawer] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {

    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawer({ ...drawer, [anchor]: open });
    // console.log(drawer)
  };
  // console.log(theme)

  return (
    <div>
      <Helmet htmlAttributes={{
        lang: language,
        dir: language === 'en' ? 'ltr' : 'rtl'
      }}>
      <style>
        {/* {'body { background-color: #DFF7FA; }'} */}
      
      
      {
          (theme === 'default') ?
          'body { background-color: #DFF7FA; }' :
          (theme === 'dark') ?
          'body { background-color: #121212; }' :
          'body { background-color: #ffffff; }'




        }
      </style>
      </Helmet>

      <ButtonAppBar text={Page} toggleDrawer={toggleDrawer} changepage={changepage} />
      <TemporaryDrawer lang={language} changepage={changepage} state={drawer} toggleDrawer={toggleDrawer} />
    </div>
  )
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


export default connect(mapStateToProps, mapDispatchToProps)(Header)