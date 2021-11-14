import React from 'react'
import './Login.css'
import { Link } from "react-router-dom"

export default function LoginAdmin() {
    return (
        <div className="bg_login">
            <div className="login-page">
                <div className="form">
                    Iniciar sesión Administrador
                    <br />
                    <br />
                    <form className="login-form">
                        <input type="text" placeholder="Correo electronico" />
                        <input type="password" placeholder="Contraseña" />
                        <button>Ingresar</button>
                        <p className="message">Eres cliente? <Link to="/Login">Inicia sesión</Link></p>
                    </form> 

                </div>
            </div>
        </div>
    )
}
