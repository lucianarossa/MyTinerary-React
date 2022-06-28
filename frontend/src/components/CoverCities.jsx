import React from "react";
import { Container } from "react-bootstrap";


function CoverCities() {
    return (
        <Container fluid className="cities-container">
            <video className="cities-video" autoPlay loop muted>
                <source src={process.env.PUBLIC_URL + "/assets/citiesvideo.mp4"} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <h1 className="cities-title">Landing Places</h1>
            <p className="cities-description">awaiting your arrival!</p>
        </Container>
    )
}

export default CoverCities