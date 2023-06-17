import React from "react";
import logoblanco from "./assets/logoblanco.svg";

const Login = (props) => {
    return (
        <div className="login">
            <div style={{width: '100%', textAlign: 'center'}}>
                <img src={logoblanco} alt="logo" className="App-logo-login" />
                <div className="cont-login">
                    <form style={{width: '100%', textAlign: 'center'}}>
                        <input type="text" placeholder="Usuario" className="input-login" />
                        <input type="password" placeholder="Contraseña" className="input-login" />
                        <button type="submit" className="btn-login">Ingresar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;