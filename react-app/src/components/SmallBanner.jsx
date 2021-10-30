import React from 'react'

export default function SmallBanner(props) {
    return (
        <div className="banner">
            <img src={props.banner} alt={props.alt} />
        </div>
    )
}
