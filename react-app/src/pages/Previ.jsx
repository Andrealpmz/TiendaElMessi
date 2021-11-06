import React from "react";

const Previ = (props) => {
    return (
<div>
<div className="container-pre">
      <img src={props.imgCamisa} alt="images-pre"/>
    <p className="pick">Escoge tu talla</p>
    <div class="sizes">
        <button className="si">S </button>
        <button className="si">M </button>
        <button className="si">L </button>
        <button className="si">XL </button>
    </div>
    <div className="product-pre">
      <h1>Camiseta del Manchester United</h1>
      <h2>$190.000</h2>
      <p className="desc-pre">Camiseta original adidas del equipo de la premier league Manchester United</p>
      <div className="buttons-pre">
        <button className="add">Agregar al carrito</button>
      </div>
    </div>
  </div>
  </div>
    )
}

export default Previ