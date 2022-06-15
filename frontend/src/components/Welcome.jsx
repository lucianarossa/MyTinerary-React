import React from "react";
import "../styles/welcome.css"
import { Link as LinkRouter } from "react-router-dom"


function Welcome() {
    return (

        <div className="call-container">
            <div className="call-box">
                <h1 className="call-title">If you want to discover the most amazing places around the world</h1>
                <p className="call-description">you are in the right place!</p>
                <LinkRouter to="/citiespage" className="Links">
                    <button className="call-button"> JOIN THE JOURNEY!
                    </button>
                </LinkRouter>
            </div>
            <img className="call-image" src={process.env.PUBLIC_URL + "/assets/callimage.png"} alt="" />
        </div>

    )
}

export default Welcome