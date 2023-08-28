import React from 'react';
import './App.css';

function App() {
  const handleButtonClick = () => {
    alert('¡Botón personalizado clickeado!');
  };

  return (
    <div className="App">
      <button onClick={handleButtonClick}>Mi Botón</button> {/* Botón personalizado */}
      <AulasComponent /> {/* Aquí importamos y usamos AulasComponent */}
    </div>
  );
}

export default App;
