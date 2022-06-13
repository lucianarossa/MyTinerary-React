import React, { useState } from "react";
import CardsCities from "./CardsCities";
import CitiesData from "../data.json";
import NotFound from "./NotFound";
import { Input  } from '@nextui-org/react';


function Cities (){
const [inputValue, setInputValue] = useState("")

let inputFilter = CitiesData.filter((city) => {
    return(
    city.name.toLowerCase().startsWith(inputValue.toLowerCase().trim())
    )});

    return(
        <div className="main-cities-container">
            <video className="cities-video" autoPlay loop muted>
            <source src={process.env.PUBLIC_URL+"/assets/portada-cities.mp4"} type='video/mp4'/>
            </video>
            <h2 className="cities-subt">Let's explore the world!</h2>
            <div className="cities-filter">
                <Input onKeyUp={(evento) => {setInputValue(evento.target.value)}} type="text" placeholder=" search by city..."></Input> 
            </div>  
            <div className="cards-container">
            {inputFilter.length > 0 ? (<CardsCities cardFilter={inputFilter}/>) : (<NotFound/>) }
            </div>  
        </div>     
)
}

export default Cities;