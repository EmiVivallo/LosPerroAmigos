import React from 'react';
import './App.css';
import AulasComponent from './componentes/AulasComponent'; 

function App() {
  const handleButtonClick = () => {
    alert('¡Botón personalizado clickeado!');
  };


  return (
    <div className="App">
      <button onClick={handleButtonClick}>Mi Botón</button> {}
      <AulasComponent /> {}
    </div>
  );
  }  


export default App;
