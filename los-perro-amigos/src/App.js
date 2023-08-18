import React from 'react';
import './App.css';
import Button from './componentes/boton.js';

function App() {
  const handleButtonClick = () => {
    alert('¡Botón personalizado clickeado!');
  };

  return (
    <div className="App">
      <Button label="Mi Botón" onClick={handleButtonClick} />
    </div>
  );
}

export default App;
