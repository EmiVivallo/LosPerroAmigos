import React from 'react';
import './App.css';
import './index.js';
import RegisterForm from './componentes/RegisterForm';
import GradientBackground from './componentes/GradientBackground';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="container">
        <RegisterForm />
      </div>
        <div>
          <GradientBackground />
        </div>
      </header>
      
    </div>
  );
}

export default App;