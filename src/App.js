import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import { NavBar } from './layouts/NavBar';
import { Banner } from './layouts/Banner';
import Footer1 from './layouts/Footer1';

import Principal from './components/Principal';
import Contactos from './components/Contactos';


function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<NavBar/>}>
              <Route index element={<Principal/>}/>  
              <Route index element={<Contactos/>}/>
              
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Banner/>
      <Footer1/>
      
      
    </div>
    
  );
}

export default App;
