import React from "react";

function NotFoundActivities() {
    return (
        <div className="notfound-container">
            <h1 className="notf-title">Sorry!! Our insiders have not shared activities for this itinerary... Choose another one!</h1>
            <img className="notfounditi" src={process.env.PUBLIC_URL + "/assets/notfound2.png"} alt="notfound" />
        </div>
    )
}

export default NotFoundActivities