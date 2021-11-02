import React from 'react'
import './Login.css'

export default function Login() {
    return (
        <div className="bg_login">
            <div className="login-page">
                <div className="form">
                    Iniciar sesión clientes
                    <br />
                    <br />
                    <form className="login-form">
                        <input type="text" placeholder="Correo electronico" />
                        <input type="password" placeholder="Contraseña" />
                        <button>Ingresar</button>
                        <p className="message">No estás registrado? <a href="registro.html">Crea una cuenta</a></p>
                        <p className="message">Olvidaste tu contraseña? <a href="contrasenia.html">Actualiza tu contraseña</a></p>
                        <p className="message">Eres administrado? <a href="loginAdmin.html">Ingresa como administrador</a></p>
                    </form>

                </div>
            </div>
        </div>
    )
}
