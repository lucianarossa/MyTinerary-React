import React from "react";

function NotFound() {
    return (
        <div className="notfound-container">
            <img className="notfound" src={process.env.PUBLIC_URL + "/assets/notfound.png"} alt="notfound" />
        </div>
    )
}

export default NotFound