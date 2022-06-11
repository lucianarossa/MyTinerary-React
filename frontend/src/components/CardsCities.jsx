import React from "react";
import Json from "../data.json"


function CardsCities(){

    return (
        <div className="card-container">
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

