import React from "react";

const ProductCard = (props) => {
    return (
        <div>
            <div className="item">
                <div className="producto">
                    <img src={props.imgCamisa} alt="imgproducto" style={{ backgroundRepeat: "no-repeat" }} />
                    <p style={{ textAlign: "center" }}>{props.name}</p>
                    <h4> {`Precio: ${props.price}`}</h4>
                    <div className="vista-rapida">Vista rápida</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard