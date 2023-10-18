import React from 'react';
import './App.css';
import AulasComponent from './componentes/AulasComponent'; 
import Algo from './componentes/algo'; 

function App() {
  const handleButtonClick = () => {
    alert('¡Botón personalizado clickeado!');
  };

  return (
    <div className="App">
      <button onClick={handleButtonClick}>Mi Botón</button> {}
      <AulasComponent /> {}
      <Algo /> {}
    </div>
  );
}

export default App;
