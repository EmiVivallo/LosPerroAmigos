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
    <div>
      <p>usuario:</p>
      <auth />
    </div>
  );
}

export default App;