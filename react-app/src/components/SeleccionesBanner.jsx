import React from 'react'
import { Link } from 'react-router-dom'

export default function SeleccionesBanner() {
    return (
        <div>
            <nav>
                <ul>
                    <li class="ver"><Link to={`/selecciones/`}>¿Que quieres ver?</Link ></li>
                    <li><Link to={`/selecciones/`}>Todo</Link ></li>
                    <li><Link to={`/selecciones/`}>Selecciones Europeas</Link ></li>
                    <li><Link to={`/selecciones/`}>Selecciones de América</Link ></li>
                    <li><Link to={`/selecciones/`}>Selecciones de Africa</Link ></li>
                    <li><Link to={`/selecciones/`}>Selecciones de Oceania</Link ></li>
                </ul>
            </nav>
        </div>
    )
}
