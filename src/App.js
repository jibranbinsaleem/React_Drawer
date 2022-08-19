import './App.css';
import Home from './screen/home';
import { Helmet } from 'react-helmet';
import React, { Suspense, useState } from 'react';
import Box from '@mui/material/Box';
import About from './screen/about';
import MarerialUIDrawer from './assets/muicomponents/drawer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TemporaryDrawer from './assets/muicomponents/drawer';
import ButtonAppBar from './assets/muicomponents/appbar';
import Logo from "./assets/images/no_bg_logo.png"

  
function App() {
  const [lang, setLang] = useState("en");

  const changelang = () => {
    lang === 'en' ? setLang('ar') : setLang("en");
  }
  return (
    <div classname="center">
      

      <Helmet htmlAttributes={{
          lang: lang,
          dir: lang === 'en' ? 'ltr' : 'rtl'
        }} />
    <ButtonAppBar changelang = {changelang}/>
     <TemporaryDrawer lang={lang} />

     <Box
            component="img"
            alt="Eaxee Logo"
            src={Logo}
        /> 
{/*      
     <Box
            component="img"
            sx={{
            alignItems:"center",
            height: 44,
            
            }}
            alt="Eaxee logo."
            src={Logo}
        />  */}
    </div>
  );
}
  
export default App;              