import './App.css';
import React from 'react';

import Header from './header';
import AppRouter from './assets/routing/appRouter';
import { Provider } from 'react-redux';
import store from './assets/redux/store';

function App() {

  return (
    <Provider store={store}>
      {/* <div> */}
      <Header />
      <AppRouter />
      {/* </div> */}
    </Provider>
  );
}

export default App;              