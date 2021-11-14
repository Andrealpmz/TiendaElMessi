import React from 'react'
import './Login.css'
import { Link } from "react-router-dom"

export default function IndexAdmin() {
    return (
        <div className="bg_login">
            <div className="login-page">
                <div className="form">
                <h4> Qué acción deseas realizar?</h4>
                    <br />
                    <form className="login-form">
                       
                        <button><Link to="/Productos">Ingresar nuevos productos</Link></button>
                        <br />
                        <br />
                        <button><Link to="/EliminarP">Eliminar productos</Link></button>
                        <br />
                        <br />
                        <button><Link to="/Index"> Ir a la pagina del cliente</Link></button>
                    </form> 

                </div>
            </div>
        </div>
    )
}
