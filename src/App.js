import './App.css';
import Home from './screen/home';

import About from './screen/about';
import MarerialUIDrawer from './assets/muicomponents/drawer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TemporaryDrawer from './assets/muicomponents/drawer';
import ButtonAppBar from './assets/muicomponents/appbar';
import MenuBookIcon from '@mui/icons-material/MenuBook';
  
function App() {
  return (
    <div>
    <ButtonAppBar />
     <TemporaryDrawer />
    </div>
  );
}
  
export default App;              