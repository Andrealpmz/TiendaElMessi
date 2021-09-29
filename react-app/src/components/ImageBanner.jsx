import React from "react";
import imgHombre from "../img/init.jpg"
import imgMujer from "../img/init2.png"

const ImageBanner = (props) => {
    return (
        <div>
            <div className="img-button" >
                <a style={{boxSizing: "border-box"}} title="Camisas para hombre" href="hombre.html">
                    <img src={imgHombre} alt="Camisas para hombre" />
                </a>
            </div>

            <div className="img-button" >
                <a style={{boxSizing: "border-box"}} title="Camisas para mujer" href="mujer.html">
                    <img src={imgMujer} alt="Camisas para mujer" />
                </a>
            </div>
        </div>
    )
}

export default ImageBanner