import './App.css';
import Home from './screen/home';
import { Helmet } from 'react-helmet';
import React, { Suspense, useState } from 'react';

import About from './screen/about';
import MarerialUIDrawer from './assets/muicomponents/drawer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TemporaryDrawer from './assets/muicomponents/drawer';
import ButtonAppBar from './assets/muicomponents/appbar';

  
function App() {
  const [lang, setLang] = useState("en");

  const changelang = () => {
    setData("This is data from Parent Component to the Child Component.");
  }
  return (
    <div>
      

      <Helmet htmlAttributes={{
          lang: lang,
          dir: lang === 'en' ? 'ltr' : 'rtl'
        }} />
    <ButtonAppBar lang = {lang}/>
     <TemporaryDrawer />
    </div>
  );
}
  
export default App;              