import React from "react";
import "../styles/App.css"
import Plane from "../images/plane.png"

function PaginaConstruccion(){
    return (
        <div className="paginaconstruccion">   
        <h1 className="titulo-construccion">PAGINA EN CONSTRUCCION</h1>
        <img className= "plane-image" src={Plane} alt="Plane" />
        </div>
    )
}

export default PaginaConstruccion