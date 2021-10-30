import React from "react";
import logo from "../img/logo-nav-2.png"
import { Link } from "react-router-dom"

const NavBar = (props) => {
    return (

        <nav>
            <Link to="/">
                <img src={logo} alt="" style={{ display: "flex", margin: "10%" }} height="22" width="120" />
            </Link>
            <ul>

                <li><Link to="/">INICIO</Link></li>
                <li><Link to="/hombre">HOMBRE</Link></li>
                <li><Link to="/mujer">MUJER</Link></li>
                <li><Link to="/selecciones">SELECCIONES</Link></li>
                <li><Link to="/ligas">LIGAS</Link></li>
                <li><Link to="/tiendas">NUESTRAS TIENDAS</Link></li>
                <li><Link to="/login">INICIAR SESION</Link></li>
                <li><Link to="/compra" className="bolsa2"></Link></li>
            </ul>
        </nav>

    )
}

export default NavBar;