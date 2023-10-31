import React from "react"

const Login = () => {
    return (
        <div className="formu">
  <form className="form-container">
    <h2 className="formTit">Registro</h2>

    <div className="form_container">
      <div className="formGrup">
        <input type="email" className="formInp" placeholder="" />
        <label className="formLab">Correo electrónico:</label>
      </div>

      <div className="formGrup">
        <input type="password" className="formInp" placeholder="" />
        <label className="formLab">Contraseña:</label>
      </div>

      <button type="button" className="formSub boton-ani">Registrar</button>
    </div>
  </form>
</div>

        /*<div className="form-container">
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
              </div>*/
    )
}

export default Login;