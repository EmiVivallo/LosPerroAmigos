import React, { useState } from "react"

import appFirebase from "../firebaseConfig"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

const auth = getAuth(appFirebase)

const Login = () => {

    const [registrando, setRegistrando] = useState(false)

    return (
        <div className="form-container">
            <div className="titf">
                <h2>Registro</h2>
            </div>
                <form>
                  <label className="form-label">
                    Correo electrónico:</label>
                    <input type="email" className="form-input" />
                  <br />
                  <label className="form-label">
                    Contraseña:</label>
                    <input type="password" className="form-input" />
                  <br />
                  <div className="titf">
                  <button type="button" className="form-button"> {registrando ? "Registrate" : "Inicia Sesion"} </button></div>
                </form>
                <h4 className="formh4">{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}<button className="button2">{registrando ? "Inicia sesion" : "Registrate"}</button></h4>
              </div>
    )
}

export default Login;