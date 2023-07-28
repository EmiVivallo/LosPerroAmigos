import React from 'react';
import './App.css';
import RegisterForm from './componentes/RegisterForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="container">
        <RegisterForm />
      </div>
    </div>
  );
}

export default App;
