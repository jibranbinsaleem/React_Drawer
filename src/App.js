import './App.css';
import Home from './screen/home';
import Ea from './screen/ea'
import Admin from './screen/admin'
import Portal from './screen/portal'
import Impex from './screen/impex';
import { Helmet } from 'react-helmet';
import React, { Suspense, useState } from 'react';
import Box from '@mui/material/Box';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TemporaryDrawer from './assets/muicomponents/drawer';
import ButtonAppBar from './assets/muicomponents/appbar';
import Logo from "./assets/images/no_bg_logo.png"

  
function App() {
  
  const [lang, setLang] = useState("en");

  const changelang = () => {
    console.log("langchange");
    lang === 'en' ? setLang('ar') : setLang("en");
  }

  const [Page, setPage] = useState("Home");

  const changepage = (text) => {
    console.log(text);
    setPage(text)
  };

  return (
 

      <div>

      <Helmet htmlAttributes={{
          lang: lang,
          dir: lang === 'en' ? 'ltr' : 'rtl'
        }} />

      <ButtonAppBar changelang={changelang} text={Page}/>
      <TemporaryDrawer lang={lang}  changepage = {changepage}/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enterprise" element={<Ea />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/Impex" element={<Impex />} />

      </Routes>
    </div>
      
  
   
  );
}
  
export default App;              