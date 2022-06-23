import React from "react";

function NotFoundItinenary() {
    return (
        <div className="notfound-container">
            <h1 className="notf-title">Our insiders haven't shared itineraries for this city ...try another destiny!</h1>
            <img className="notfounditi" src={process.env.PUBLIC_URL + "/assets/notfound2.png"} alt="notfound" />
        </div>
    )
}

export default NotFoundItinenary