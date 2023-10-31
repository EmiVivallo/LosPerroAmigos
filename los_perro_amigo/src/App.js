


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