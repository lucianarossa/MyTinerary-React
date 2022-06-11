import React from "react";
import CardsCities from "./CardsCities"


function MainCities (){
    return(
        <div className="main-cities-container">
            <h2 className="cities-subt">Choose your next adventure!</h2>
            <CardsCities/>
        </div>     
)
}

export default MainCities