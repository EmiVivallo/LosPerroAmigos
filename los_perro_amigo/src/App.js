import React from 'react';
import './App.css';
import RegisterForm from './componentes/RegisterForm';
import GradientBackground from './componentes/GradientBackground';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';
import firebaseConfig from './componentes/firebase-config'; // Importa la configuración de Firebase

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

export default App;
