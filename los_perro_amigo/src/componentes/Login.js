import React, { useState } from "react"

import { appFirebase } from "../firebaseConfig"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth"
import Swal from 'sweetalert2';

const providerGoogle = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();

const auth = getAuth(appFirebase)

const Login = () => {

    function loginGithub() {
        signInWithPopup(auth, providerGithub)
        .then((result) => {
        
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        
        const user = result.user;
        
        
        }).catch((error) => {
            
            const errorCode = error.code;
            const errorMessage = error.message;
            
            const email = error.customData.email;
            
            const credential = GithubAuthProvider.credentialFromError(error);
            
        });
    }

    function loginGoogle() {
            signInWithPopup(auth, providerGoogle)
        .then((result) => {
        
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        
        const user = result.user;
        
        }).catch((error) => {
            
            const errorCode = error.code;
            const errorMessage = error.message;
            
            const email = error.customData.email;
            
            const credential = GoogleAuthProvider.credentialFromError(error);
            
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
                  Swal.fire({
                    icon: "error",
                    title: "Ocurrio un error",
                    text: "El correo electrónico no es válido. Por favor, ingrese un correo válido."
                  });
                    return; // Detener el proceso de registro
                }

            const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^.&*])(?=.*[A-Z]).{8,}$/;
                if (!passwordRegex.test(contraseña)) {
                  Swal.fire({
                    icon: "error",
                    title: "Ocurrio un error",
                    text: "Asegúrese de que la contraseña cumpla con los requisitos:\n- Al menos 8 caracteres\n- Al menos un número\n- Al menos un símbolo (!@#$%^&*.)\n- Al menos una letra mayúscula"
                  });
                     return; // Detener el proceso de registro
                  }
          
            try {
              await createUserWithEmailAndPassword(auth, correo, contraseña);
              // Registro exitoso
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Ocurrio un error",
                text: "Ocurrió un error durante el registro. Intente de nuevo"
              });
            }
          } else {
            try {
              await signInWithEmailAndPassword(auth, correo, contraseña);
              // Inicio de sesión exitoso
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Ocurrio un error",
                text: "El correo o la contraseña son incorrectos."
              });
            }
          }
        }
          

    return (
        <div className="form-container">
            
                <form onSubmit={functAutenticacion}>
                  <div className="titf">
                  <h2>{registrando ? " " : "Bienvenido de nuevo"}</h2>
                  <h2>{registrando ? "Registrate" : "Inicia Sesion"}</h2>
                  </div>
                  <label className="form-label">
                    Correo electrónico:</label>
                    <input type="email" className="form-input" id="email" />
                  <br />
                  <label className="form-label">
                    Contraseña:</label>
                    <input type="password" className="form-input" id="password" />
                  <br />
                  <div className="titf">
                  <button className="form-button"> {registrando ? "Registrate" : "Inicia Sesion"} </button>
                  </div>
                </form>
                <h4 className="formh4">{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}<button className="button2" onClick={()=>setRegistrando(!registrando)}>{registrando ? "Inicia sesion" : "Registrate"}</button></h4>
                
                <button className="googleButton" onClick={loginGoogle}>Iniciar Sesión con Google</button> 
                <button className="gitButton" onClick={loginGithub}>Iniciar Sesión con GitHub</button> 
        </div>
    )
}

export default Login;