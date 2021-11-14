import React from 'react'
import './Login.css'
import { Link } from "react-router-dom"

export default function Productos() {
    return (
        <div className="bg_login">
            <div className="login-page">
                <div className="form">
                   Creación de nuevos productos
                    <br />
                    <br />
                    <form className="login-form">
                    <input type="text" placeholder="Imagen del producto"/>
                    <input type="text" placeholder="Nombre del producto"/>
                    <input type="text" placeholder="Precio del producto"/>
                    <input type="text" placeholder="Descripción"/>
                    <input type="text" placeholder="Categoría"/>
                    <button>Crear producto</button>
                        <p className="message">Terminaste de agregar productos? <Link to="/Index">Volver al inicio</Link></p>
                    </form> 

                </div>
            </div>
        </div>
    )
}
