


import React, { useState } from 'react';

import "./App.css";

//Modulos de firebase
import appFirebase from "../src/firebaseConfig";
import {getAuth, onAuthStateChanged} from "firebase/auth";
//Componentes
import Login from "./componentes/Login.js"
import Home from "./componentes/Home.js";
const auth = getAuth(appFirebase);



function App() {

  const [usuario, setUsuario] = useState (null)

  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    }
    else {
      setUsuario(null)
    }
  })

  return (
    <div>
      {usuario ? <Home correoUsuario = {usuario.email} /> : <Login/>}
    </div>
  )
}

export default App;