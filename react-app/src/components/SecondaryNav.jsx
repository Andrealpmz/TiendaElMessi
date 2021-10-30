import React from 'react'
import { Link } from 'react-router-dom';

export default function SecondaryNav(props) {
    return (
        <div>
            <nav>
                <ul>
                    <li class="ver"><Link to={`/${props.link}/`}>¿Que quieres ver?</Link ></li>
                    <li><Link to={`/${props.link}/`}>Todo</Link ></li>
                    <li><Link to={`/${props.link}/`}>Camisas de fútbol</Link ></li>
                    <li><Link to={`/${props.link}/`}>Ropa deportiva</Link ></li>
                    <li><Link to={`/${props.link}/`}>Camisas de la NBA</Link ></li>
                    <li><Link to={`/${props.link}/`}>Trajes para ciclismo</Link ></li>
                </ul>
            </nav>
        </div>
    )
}
