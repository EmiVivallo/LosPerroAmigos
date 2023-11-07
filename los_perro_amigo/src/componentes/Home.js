import React from "react"
import appFirebase from "../firebaseConfig";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(appFirebase)

const Home = ({correoUsuario}) => {
    return (
        <h2 className="h22">Bienvenido usuario {correoUsuario} <button onClick={()=>signOut(auth)}> Cerrar Sesion</button> </h2>
    )
}

export default Home;