import React from 'react'
import SecondaryNav from '../components/SecondaryNav';
import SmallBanner from '../components/SmallBanner'
import bannerImg from '../img/banner-hombre.png';

export default function Hombres() {
    return (
        <div>
            <SmallBanner banner={bannerImg} alt="Camisas para hombre" />
            <SecondaryNav link="hombre" />
            <h1>Hombres</h1>
        </div>
    )
}
