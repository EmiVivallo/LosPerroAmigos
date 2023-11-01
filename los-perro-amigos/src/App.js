import React from 'react';
import './App.css';
import AulasComponent from './componentes/AulasComponent'; 
import CursosComponent from './componentes/CursosComponent';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import Button from './componentes/boton';

function App() {
  <BrowserRouter>
    <NavLink to="/home"> CursosComponent </NavLink>
  </BrowserRouter>
  const handleButtonClick = () => {
  };


  return (

    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Button/>}></Route>
          <Route path='/teoria' element={<CursosComponent/>}></Route>
          <Route path='/aulas' element={<AulasComponent/>}></Route>
        </Routes> 
      </BrowserRouter>
    </div>
  );
  }  


export default App;
