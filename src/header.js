
import { Helmet } from 'react-helmet';
import React, { Suspense, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { connect, Provider } from 'react-redux';
import store from './assets/redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TemporaryDrawer from './assets/muicomponents/drawer';
import ButtonAppBar from './assets/muicomponents/appbar';
import Logo from "./assets/images/no_bg_logo.png"
import { useSelector, useDispatch } from 'react-redux';

const Header = (props) => {

  let { language } = props
  // var language = 'en'
  // language = window.localStorage.getItem('lang');

  // console.log(language)
  // const [lang, setLang] = useState('en');


  // const changelang = () => {

  //   console.log("langchange");
  //   lang === 'en' ? setLang('ar') : setLang("en");
  //   console.log(lang)
  // }
  // const [lang, setLang] = useState('')


  // const reducerData = useSelector(data => data);


  useEffect(() => {
    // console.log('reducerData', reducerData);

    // setLang(reducerData.language)
    // console.log("here", lang)
  }, [])

  const [Page, setPage] = useState("Home");

  const changepage = (text) => {
    console.log(text);
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
    console.log(drawer)
  };

  return (
    <div>
      <Helmet htmlAttributes={{
        lang: language,
        dir: language === 'en' ? 'ltr' : 'rtl'
      }} />

      <ButtonAppBar text={Page} toggleDrawer={toggleDrawer} changepage={changepage} />
      <TemporaryDrawer lang={language} changepage={changepage} state={drawer} toggleDrawer={toggleDrawer} />
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
        value: (lang == 'en') ? 'ar' : "en"
      })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)