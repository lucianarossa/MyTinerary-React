import React, { useState } from "react";
import CardsCities from "./CardsCities";
import NotFound from "./NotFound";
import { Input } from '@nextui-org/react';
import axios from "axios"
import { useEffect } from "react";

function Cities() {
    const [inputValue, setInputValue] = useState("")
    const [cities, setCities] = useState()
    

    useEffect(() => {
        axios.get("http://localhost:4000/api/cities")
            .then(response => setCities(response.data.response.cities))
    }, [])

    let cityFilter = cities?.filter(city => city.name.toLowerCase().startsWith(inputValue.toLowerCase().trim()));
    
    return (
        <div className="main-cities-container">
            <video className="cities-video" autoPlay loop muted>
                <source src={process.env.PUBLIC_URL + "/assets/portada-cities.mp4"} type='video/mp4' />
            </video>
            <h2 className="cities-subt">Let's explore the world!</h2>
            <div className="cities-filter">
                <Input aria-label="input" onKeyUp={(evento) => { setInputValue(evento.target.value) }} type="text" placeholder=" search by city..."></Input>
            </div>
            <div className="cards-container">
                {cityFilter?.length > 0 ? (<CardsCities cardFilter={cityFilter} />) : (<NotFound />)}
            </div>
        </div>
    )
}

export default Cities;