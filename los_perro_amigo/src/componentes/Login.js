import React from "react"

const Login = () => {
    return (
        <div className="form-container">
                <h2>Registro</h2>
                <form>
                  <label className="form-label">
                    Correo electrónico:
                    <input type="email" className="form-input" />
                  </label>
                  <br />
                  <label className="form-label">
                    Contraseña:
                    <input type="password" className="form-input" />
                  </label>
                  <br />
                  <button type="button" className="form-button"> Registrar </button>
                </form>
              </div>
    )
}

export default Login;