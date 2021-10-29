import React from "react";
import ProductCard from "./ProductCard";

import imgCamisa from "../img/camisas/united.png"


const Featured = (props) => {
    ProductCard.defaultProps = {
        imgCamisa,
        name: 'Camiseta adidas Manchester United',
        price: '199.000'
    }

    return (
        <div>
            <h2 style={{ margin: "1%", color: "#000" }}> Destacados </h2>
            <ProductCard />
        </div>
    )
}

export default Featured