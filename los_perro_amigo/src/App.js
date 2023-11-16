import React, { useState, useEffect } from 'react';
import "./App.css";
import { appFirebase } from "../src/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./componentes/Login.js";
import Home from './componentes/Home.js';
import Create from './componentes/Create.js';
import Edit from './componentes/Edit.js';
import {Show} from './componentes/Show.js';
import 'bootstrap/dist/css/bootstrap.min.css';


const auth = getAuth(appFirebase);

function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      setUsuario(usuarioFirebase);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={usuario ? <Home correoUsuario={usuario.email} /> : <Login />} />
          <Route path='/show' element={<Show />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
