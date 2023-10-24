import React, { useState } from 'react';
import '@firebase/auth';
import { useFirebaseApp } from 'reactfire';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //const handleRegister = () => {
    //alert(`¡Registro exitoso! Bienvenido, ${username}.`);
  //};

  const firebase = useFirebaseApp();

  const submit = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email,password)
  }

  return (
    <div className="form-container">
      <h2>Registro</h2>
      <form>
        <label className="form-label">
          Nombre de usuario:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
          />
        </label>
        <br />
        <label className="form-label">
          Correo electrónico:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </label>
        <br />
        <label className="form-label">
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </label>
        <br />
        <button type="button" onClick={submit} className="form-button">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;