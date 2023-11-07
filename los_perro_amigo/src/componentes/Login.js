import React from "react"

const Login = () => {
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