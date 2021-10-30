import React from 'react'
import SeleccionesBanner from '../components/SeleccionesBanner'
import SmallBanner from '../components/SmallBanner'

import bannerImg from '../img/banner-seleccion.png'

export default function Selecciones() {
    return (
        <div>
            <SmallBanner banner={bannerImg} alt="Selecciones del mundo" />
            <SeleccionesBanner />
            <h1>Selecciones</h1>
        </div>
    )
}
