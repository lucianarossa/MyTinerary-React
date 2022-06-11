import React from "react";
import { useState } from "react";
import Json from "../data.json"


// CREO LOS ESTADOS DEL COMPONENTE CARDS INICIANDO EN FALSE Y ASIGNO LA FUNCION DE ACTUALIZACION CON EL EVENTO CLICK

const CardsCities = () => {
    const [showBack, setShowBack] = useState(false); 
  
    function handleClick(event) { 
      if (event.variant === "click") { 
        setShowBack(!showBack); 
      } 
    } 

//DEFINO EL RETURN CON UN MAP AL JSON

    return (
        <div className="card-container" onClick={handleClick}>
          {Json.map(city=>(

              <div className="card" key={city.id}>
                
                     <img width="100%" className="card-img" src={process.env.PUBLIC_URL+`${city.image}`} alt="cities"/>
                     <button className="cities-button">{city.name}</button>
                     
                 
              </div>
           ))}
        </div>
      );
    }
    
    export default CardsCities;  

