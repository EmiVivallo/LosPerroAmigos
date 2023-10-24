import React from "react";
import 'firebase/auth';
import { useFirebaseApp } from "reactfire";
import RegisterForm from "./componentes/RegisterForm";



export default {props} => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const firebase = useFirebaseApp();
   const submit = async () => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
      alert(`¡Registro exitoso! Bienvenido, ${userCredential.user.displayName}.`);
    } catch (error) {
      console.error('Error al registrar el usuario', error);
    }
  };
    return (
    <div>
        <div>
            <RegisterForm />
        </div>
    </div>
    )
}