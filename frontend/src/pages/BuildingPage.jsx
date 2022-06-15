import React from "react";
import "../styles/App.css"

function BuildingPage() {
    return (
        <div className="buildingpage">
            <h1 className="biulding-title">UNDER CONSTRUCTION</h1>
            <h2 className="biulding-subt">We are working hard to make this website available!</h2>
            <img className="plane-image" src={process.env.PUBLIC_URL + "/assets/plane.png"} alt="Plane" />
        </div>
    )
}

export default BuildingPage