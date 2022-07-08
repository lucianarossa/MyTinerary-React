import React from "react";
import "../styles/itinerary.css"


function Activity({activity}){
    // console.log(activity)
    return(
        <div className="card card-activ">
          <img width="100%" className="card-img card-img-activ" src={process.env.PUBLIC_URL + `${activity.image}`} alt="cities" />
          <div className="card-text text-activ">
            <h2 className="city-name activ-name">{activity.name}</h2>
          </div> 
        </div>
    )
}

export default Activity