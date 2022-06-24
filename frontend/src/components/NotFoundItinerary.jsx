import React from "react";

function NotFoundItinenary() {
    return (
        <div className="notfound-container">
            <h1 className="notf-title">Sorry!! Our insiders have not shared itineraries for this city... You can choose another destination!</h1>
            <img className="notfounditi" src={process.env.PUBLIC_URL + "/assets/notfound2.png"} alt="notfound" />
        </div>
    )
}

export default NotFoundItinenary