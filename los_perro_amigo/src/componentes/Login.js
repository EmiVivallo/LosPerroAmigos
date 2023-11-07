import React, { useState } from "react"

import appFirebase from "../firebaseConfig"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(appFirebase)

const Login = () => {

    function loginGoogle() {
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

    }

    const [registrando, setRegistrando] = useState(false)

    const functAutenticacion = async(e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if (registrando) {
            const correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if (!correoRegex.test(correo)) {
                    alert("El correo electrónico no es válido. Por favor, ingrese un correo válido.");
                    return; // Detener el proceso de registro
                }

            const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^.&*])(?=.*[A-Z]).{8,}$/;
                if (!passwordRegex.test(contraseña)) {
                     alert("Asegúrese de que la contraseña cumpla con los requisitos:\n- Al menos 8 caracteres\n- Al menos un número\n- Al menos un símbolo (!@#$%^&*.)\n- Al menos una letra mayúscula");
                     return; // Detener el proceso de registro
                  }
          
            try {
              await createUserWithEmailAndPassword(auth, correo, contraseña);
              // Registro exitoso
            } catch (error) {
              alert("Ocurrió un error durante el registro. Intente de nuevo");
            }
          } else {
            try {
              await signInWithEmailAndPassword(auth, correo, contraseña);
              // Inicio de sesión exitoso
            } catch (error) {
              alert("El correo o la contraseña son incorrectos.");
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