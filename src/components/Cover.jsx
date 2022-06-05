import React from "react";
import "../styles/cover.css"
import Video from "../images/covervideo.mp4"
import Plane from "../images/plane.png"

function Cover() {
    return(
    
        <div className="cover-container">      
        <video className="cover-video" autoPlay loop muted>
            <source src={Video} type='video/mp4'/>
        </video>
        <h1 className="cover-title">MyTinerary</h1>
        <p className="slogan">Find your perfect trip!</p>
        <p className="slogan">Designed by insiders who know and love their cities!</p>
        <img className="plane-image"src={Plane} alt="" />
        </div>
        
    )
}

export default Cover