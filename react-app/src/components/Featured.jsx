import React, {useState, useEffect} from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

import imgCamisa from "../img/camisas/united.png"


const Featured = (props) => {

    const [data, setData] = useState({});


    ProductCard.defaultProps = {
        imgCamisa,
        name: 'Camiseta adidas Manchester United',
        price: '199.000'
    }

    useEffect(async () =>{
        const result = await axios('http://localhost:3100/product');

        setData(await result)

        console.log(await data);
    },[]);


    return (
        <div>
            <h2 style={{ margin: "1%", color: "#000" }}> Destacados </h2>
            <ProductCard />
        </div>
    )
}

export default Featured