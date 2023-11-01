import React from 'react';
import './App.css';
import AulasComponent from './componentes/AulasComponent'; 
import CursosComponent from './componentes/CursosComponent';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"

function App() {
  <BrowserRouter>
    <NavLink to="/home"> CursosComponent </NavLink>
  </BrowserRouter>
  const handleButtonClick = () => {
  };


  return (

    <div className="App">
     <BrowserRouter>
    <NavLink to="/teoria"> <button onClick={handleButtonClick}>Teoria</button> {}</NavLink>
    <NavLink to="/taller"> <button onClick={handleButtonClick}>Taller</button> {}</NavLink>
  </BrowserRouter>
      <CursosComponent className="CursosComponent"/> {}
      <AulasComponent /> {}
    </div>
  );
  }  


export default App;
