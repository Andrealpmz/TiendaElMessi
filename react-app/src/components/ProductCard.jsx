import React from "react";
import imgCamisa from "../img/camisas/united.png"

const ProductCard = () => {
    return (
        <div>
            <div className="item">
                <div className="producto">
                    <img src={imgCamisa} alt="imgproducto" style={{backgroundRepeat: "no-repeat"}} />
                    <p style={{textAlign: "center"}}>Camiseta adidas Manchester United</p>
                    <h4> Precio: $190.000</h4>
                    <div className ="vista-rapida">Vista rápida</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard