import React from 'react'
import SecondaryNav from '../components/SecondaryNav'
import SmallBanner from '../components/SmallBanner'
import bannerImg from '../img/banner-mujer.png'

export default function Mujer() {
    return (
        <div>
            <SmallBanner banner={bannerImg} alt="Ropa Mujer" />
            <SecondaryNav link="mujer" />
            <h1>Mujer</h1>
        </div>
    )
}
