import React, { useState } from "react"

import appFirebase from "../firebaseConfig"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

const auth = getAuth(appFirebase)

const Login = () => {

    const [registrando, setRegistrando] = useState(false)

    const functAutenticacion = async(e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if (registrando) {
            try {
                await createUserWithEmailAndPassword(auth, correo, contraseña)
            } catch (error) {
                alert("Asegurese que la contraseña tenga mas de 8 caracteres")
            }
        }
        else{
            try {
                await signInWithEmailAndPassword(auth, correo, contraseña)
            } catch (error) {
                alert("El correo o la contraseña son incorrectos")
            }
            
        }
    }

    return (
        <div className="form-container">
            <div className="titf">
                <h2>Registro</h2>
            </div>
                <form onSubmit={functAutenticacion}>
                  <label className="form-label">
                    Correo electrónico:</label>
                    <input type="email" className="form-input" id="email" />
                  <br />
                  <label className="form-label">
                    Contraseña:</label>
                    <input type="password" className="form-input" id="password" />
                  <br />
                  <div className="titf">
                  <button className="form-button"> {registrando ? "Registrate" : "Inicia Sesion"} </button></div>
                </form>
                <h4 className="formh4">{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}<button className="button2" onClick={()=>setRegistrando(!registrando)}>{registrando ? "Inicia sesion" : "Registrate"}</button></h4>
        </div>
    )
}

export default Login;