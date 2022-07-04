import React from "react";
import { Container } from "react-bootstrap";
import { Link as LinkRouter } from "react-router-dom"

function GoodBye() {
    return (
        <Container fluid className="cities-container">
            <video className="cities-video" autoPlay loop muted>
                <source src={process.env.PUBLIC_URL + "/assets/goodbye.mp4"} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <h1 className="cities-title">SeeYouSoon!</h1>
            <p className="cities-description">100 % Pure Adventurers!</p>
            <LinkRouter to="/" className="Links">
                    <button className="call-button"> BACK HOME!
                    </button>
            </LinkRouter>
        </Container>
    )
}

export default GoodBye