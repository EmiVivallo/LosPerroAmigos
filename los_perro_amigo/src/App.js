


import React, { useState } from 'react';

import "./App.css";

//Modulos de firebase
import appFirebase from "../src/firebaseConfig";
import {getAuth, onAuthStateChanged} from "firebase/auth";
//Componentes
import Login from "./componentes/Login.js"
import Home from "./componentes/Home.js";
import "bootstrap/dist/css/bootstrap.min.css"

//crud
import { Show } from './componentes/Show.js';
import Edit from './componentes/Edit.js';
import Create from './componentes/Create.js';

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
      <Show/>
    </div>
  )
}

export default App;