import './App.css';
import Home from './screen/home';
import Ea from './screen/ea'
import Admin from './screen/admin'
import Portal from './screen/portal'
import Impex from './screen/impex';
import { Helmet } from 'react-helmet';
import React, { Suspense, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Header from './header';

import { Provider } from 'react-redux';
import store from './assets/redux/store';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TemporaryDrawer from './assets/muicomponents/drawer';
import ButtonAppBar from './assets/muicomponents/appbar';
import Logo from "./assets/images/no_bg_logo.png"
import { useSelector, useDispatch } from 'react-redux';


function App() {

  var language = 'en'
  language = window.localStorage.getItem('lang');

  console.log(language)
  const [lang, setLang] = useState('en');
  

  const changelang = () => {

    console.log("langchange");
    lang === 'en' ? setLang('ar') : setLang("en");






  }

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


  // useEffect(() => {
  //   let obj = {
  //     name: 'jibran',
  //     id: 1
  //   }
  //   window.localStorage.setItem('name', JSON.stringify(obj))

  //   let name = window.localStorage.getItem('name')

  //   console.log("name:", JSON.parse(name));
  // }, [])

  return (

    <Provider store={store}>
      <div>
{/* 
        <Helmet htmlAttributes={{
          lang: lang,
          dir: lang === 'en' ? 'ltr' : 'rtl'
        }} />

        <ButtonAppBar changelang={changelang} text={Page} toggleDrawer={toggleDrawer} changepage={changepage} />
        <TemporaryDrawer lang={lang} changepage={changepage} state={drawer} toggleDrawer={toggleDrawer} /> */}

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enterprise" element={<Ea lang={lang} />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/Impex" element={<Impex />} />

        </Routes>
      </div>
    </Provider>


  );
}

export default App;              