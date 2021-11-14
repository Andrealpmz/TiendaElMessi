import React from 'react'
import './Login.css'
import { Link } from "react-router-dom"

export default function Registro() {
    return (
        <div className="bg_login">
            <div className="login-page">
                <div className="form">
                    Registro clientes
                    <br />
                    <br />
                    <form className="login-form">
                    <input type="text" placeholder="Nombre" />
                    <input type="text" placeholder="Apellido" />
                        <input type="text" placeholder="Correo electronico" />
                        <input type="password" placeholder="Contraseña" />
                        <button>Crear cuenta</button>
                        <p className="message">Ya estás registrado? <Link to="/Login">Inicia sesión</Link></p>
                    </form>

                </div>
            </div>
        </div>
    )
}