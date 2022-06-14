import React from "react";
import {Link as LinkRouter} from "react-router-dom"




function CardsCities({cardFilter}){

    return (
        <div className="card-container">
          {cardFilter.map(city=>(
              <div className="card" key={city.id}>
                     <img width="100%" className="card-img" src={process.env.PUBLIC_URL+`${city.image}`} alt="cities"/>
                     <div className="card-text">
                         <h2 className="city-name">{city.name}</h2>
                         <p className="city-description">{city.description}
                         <LinkRouter className="button" to= {`citydetails/${city.id}`}>
                              SEE MORE!    
                         </LinkRouter>
                         </p>
                     </div>    
              </div>
           ))}
        </div>
      );
    }
    
    export default CardsCities;  

