import React from "react";


function CardsCities({cardFilter}){

    return (
        <div className="card-container">
          {cardFilter.map(city=>(
              <div className="card" key={city.id}>
                     <img width="100%" className="card-img" src={process.env.PUBLIC_URL+`${city.image}`} alt="cities"/>
                     <div className="card-text">
                         <h2 className="city-name">{city.name}</h2>
                         <p className="city-description">{city.description}
                            <button>
                              See More!
                            </button>
                         </p>
                     </div>    
              </div>
           ))}
        </div>
      );
    }
    
    export default CardsCities;  

