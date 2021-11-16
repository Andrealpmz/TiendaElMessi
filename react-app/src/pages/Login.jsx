import React from 'react'
import './Login.css'
import { Link } from "react-router-dom"

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
                        <p className="message">No estás registrado? <Link to="/Registro">Crear una cuenta</Link></p>
                        <p className="message">Olvidaste tu contraseña? <Link to="/Contrasenia">Actualiza tu contraseña</Link></p>
                        <p className="message">Eres administrado? <Link to="/LoginAdmin">Ingresa como administrador</Link></p>
                    </form> 
                </div>
            </div>
        </div>
    )
}
