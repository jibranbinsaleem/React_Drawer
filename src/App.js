import './App.css';
import React, { Suspense, useEffect, useState } from 'react';

import Header from './header';
import AppRouter from './assets/routing/appRouter';
import { Provider } from 'react-redux';
import store from './assets/redux/store';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';




function App() {
  const reducer = useSelector(state => state)
  const lang = useSelector(state => state);
  console.log("ttt", lang);

  const [globalLang, setGlobalLang] = useState(reducer.language)



  useEffect(() => {

    console.log("app.js reducer:", reducer);

  }, [reducer])

  return (

    // <Provider store={store}>
    <div>
      {/* app.js: {reducer.language} */}
      <Header lang={globalLang} setLang={setGlobalLang} />
      <AppRouter lang={globalLang} setLang={setGlobalLang} />
    </div>
    // </Provider>


  );
}

export default App;              