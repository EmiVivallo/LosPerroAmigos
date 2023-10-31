/*import React, {useState} from "react";
import 'firebase/auth';
import { useFirebaseApp } from "reactfire";
import firebaseConfig from './firebaseConfig';




export default (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const firebase = useFirebaseApp();
    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        //console.log(email,password)
    }
    return (
              <div className="form-container">
                <h2>Registro</h2>
                <form>
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
          }*/