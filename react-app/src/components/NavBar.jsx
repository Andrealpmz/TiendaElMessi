import React from "react";
import logo from "../img/logo-nav-2.png"

const NavBar = (props) => {
    return (
        <div>
            <nav>
                <a href="index.html">
                    <img src={logo} alt="" style={{display : "flex", margin: "10%"}} height="22" width="120" />
                </a>
                <ul>

                    <li><a href="index.html">INICIO</a></li>
                    <li><a href="hombre.html">HOMBRE</a></li>
                    <li><a href="mujer.html">MUJER</a></li>
                    <li><a href="selecciones.html">SELECCIONES</a></li>
                    <li><a href="ligas.html">LIGAS</a></li>
                    <li><a href="tiendas.html">NUESTRAS TIENDAS</a></li>
                    <li><a href="login.html">INICIAR SESION</a></li>
                    <li><a href="compra.html" class="bolsa2"></a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;