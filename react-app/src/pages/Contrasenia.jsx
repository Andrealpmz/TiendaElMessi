import React from 'react'
import './Login.css'
import { Link } from "react-router-dom"

export default function Contrasenia() {
    return (
        <div className="bg_login">
            <div className="login-page">
                <div className="form">
                Actualiza tu contraseña
                    <br />
                    <br />
                    <form className="login-form">
                    <input type="text" placeholder="Correo electronico"/>
                    <input type="password" placeholder="Nueva contraseña"/>
                    <button>Actualizar contraseña</button>
                        <p className="message"> <Link to="/Login">Inicia sesión</Link></p>
                    </form>

                </div>
            </div>
        </div>
    )
}