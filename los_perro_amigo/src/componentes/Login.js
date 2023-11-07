import React, { useState } from "react"

import appFirebase from "../firebaseConfig"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

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
                  <button type="button" className="form-button"> Registrar </button></div>
                </form>
              </div>
    )
}

export default Login;