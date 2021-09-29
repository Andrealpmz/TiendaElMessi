import React from "react";
import ProductCard from "./ProductCard";

const Featured = (props) => {
    return(
        <div>
            <h2 style={{margin: "1%", color: "#000"}}> Destacados </h2>
            <ProductCard/>
        </div>
    )
}

export default Featured