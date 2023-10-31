/*import React from 'react';
import './App.css';
import './index.js';
//import RegisterForm from './componentes/RegisterForm';
import GradientBackground from './componentes/GradientBackground';
import 'firebase/auth';
import {
  useFirebaseApp
} from 'reactfire';
import Auth from './/componentes/Auth';

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);
  return (
    <div className="App">
      <header className="App-header">
      <div className="container">
        <Auth />
      </div>
        <div>
          <GradientBackground />
        </div>
      </header>
      
    </div>
  );
}

export default App;*/


import { useState } from react;
import "./App.css";

//Modulos de firebase
import appFirebase from "../src/firebaseConfig";
import {getAuth, onAuthStateChanged} from "firebase/auth";
const auth = getAuth(appFirebase);

//Componentes
import Login from "../src/componentes/Login"
import Home from "./componentes/Home";

function App() {

  const [usuario, setUsuario] = useState (null)

  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    }
  })

  return {

  }
}

export default App;