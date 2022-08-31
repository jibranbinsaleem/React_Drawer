import './App.css';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './header';
import AppRouter from './assets/routing/appRouter';
import { connect } from 'react-redux';

function App( props ) {

  let { theme } = props

  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  
  const defaultTheme = createTheme({
    pallete: {
      primary: {
        main: '#0D7E8A',
        drawer_icon : '#000000'
      },
    },
  })
  
  const lightTheme = createTheme({
    pallete:{
      mode: 'light'
    }
  })
  
  const appTheme =   (theme === "default" ? defaultTheme : (theme === "dark" ? darkTheme : lightTheme) )
  console.log(appTheme)
  



  return (

    // <div className='App'>
    <ThemeProvider theme={appTheme}>
    
      <Header />
      <AppRouter />
    
    </ThemeProvider>
    // </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(App)