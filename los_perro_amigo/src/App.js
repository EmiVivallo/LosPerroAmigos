import React, { useState } from 'react';

import "./App.css";

//Modulos de firebase
import appFirebase from "../src/firebaseConfig";
import {getAuth, onAuthStateChanged} from "firebase/auth";
//Componentes
import Login from "./componentes/Login.js"
import "bootstrap/dist/css/bootstrap.min.css"

//crud
import { Show } from './componentes/Show.js';
import Edit from './componentes/Edit.js';
import Create from './componentes/Create.js';

//router}
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
      
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={usuario ? <Show correoUsuario = {usuario.email} /> : <Login/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </div>


  )
}

export default App;