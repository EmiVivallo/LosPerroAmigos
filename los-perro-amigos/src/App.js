import React from 'react';
import './App.css';
import AulasComponent from './componentes/AulasComponent'; 
import CursosComponent from './componentes/CursosComponent';

function App() {
  const handleButtonClick = () => {
    alert('¡Botón personalizado clickeado!');
  };


  return (
    <div className="App">
      <button onClick={handleButtonClick}>Mi Botón</button> {}
      <CursosComponent className="CursosComponent"/> {}
      <AulasComponent /> {}
    </div>
  );
  }  


export default App;
