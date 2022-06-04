import React from "react";
import "../styles/main.css"
import Welcome from "./Welcome"
import Carrousel from "./Carrousel"


function Main() {
    return(
        <>
        <div className="BackroundImage">
            <Welcome/>
        </div>
        <div className="CarrouselContainer" >
            <Carrousel/>
        </div>
        </>
)
}

export default Main