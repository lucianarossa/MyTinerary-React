import React from "react";
import CardsCities from "./CardsCities"


function MainCities (){
    return(
        <div className="main-cities-container">
            <video className="cities-video" autoPlay loop muted>
            <source src={process.env.PUBLIC_URL+"/assets/portada-cities.mp4"} type='video/mp4'/>
            </video>
            <h2 className="cities-subt">Let's explore the world!</h2>
            <CardsCities/>
        </div>     
)
}

export default MainCities