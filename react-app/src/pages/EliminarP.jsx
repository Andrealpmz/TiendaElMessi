import React from 'react'
import './Login.css'
import { Link } from "react-router-dom"

export default function Eliminar() {
    return (
        <div className="bg_login">
            <div className="login-page">
                <div className="form">
                    Eliminar productos por su nombre
                    <br />
                    <br />
                    <form className="login-form">
                        <input type="text" placeholder="Nombre producto" />
                        <button>Eliminar</button>
                        <p className="message">Terminaste de eliminar productos? <Link to="/Index">Volver al inicio</Link></p>
                    </form> 

                </div>
            </div>
        </div>
    )
}
