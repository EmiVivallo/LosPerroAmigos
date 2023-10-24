/*import React from 'react';
import './App.css';
import './index.js';
import RegisterForm from './componentes/RegisterForm';
import GradientBackground from './componentes/GradientBackground';
import 'firebase/auth';
import {
  useFirebaseApp
} from 'reactfire';

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);
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

export default App;*/


import React from 'react';
import './App.css';
import './index.js';
import GradientBackground from './componentes/GradientBackground';

function App () {
  return (
    <div className="form-container">
      <h2>Registro</h2>
      <form>
        <label className="form-label">
          Nombre de usuario:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
          />
        </label>
        <br />
        <label className="form-label">
          Correo electrónico:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </label>
        <br />
        <label className="form-label">
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </label>
        <br />
        <button type="button" onClick={submit} className="form-button">
          Registrar
        </button>
      </form>
    </div>
  );
}

export default App;