import React, { useState } from 'react';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Aquí puedes enviar los datos a tu servidor para procesar el registro
    // Por ejemplo, usando una API o un endpoint en tu backend
    // Puedes usar fetch() o cualquier otra biblioteca de AJAX

    // Una vez que los datos sean enviados exitosamente, puedes mostrar un mensaje de éxito
    alert(`¡Registro exitoso! Bienvenido, ${username}.`);
  };

  return (
    <div>
      <h2>Registro</h2>
      <form>
        <label>
          Nombre de usuario:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Correo electrónico:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleRegister}>
          Registrar
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
