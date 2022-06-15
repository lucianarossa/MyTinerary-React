import React from "react";
import { Container } from "react-bootstrap";


function CoverCities() {
    return (
        <Container fluid className="cities-container">
            <img className="cities-image" src={process.env.PUBLIC_URL + "/assets/backround-cities.jpg"} alt="backround" />
            <h1 className="cities-title">Landing Places</h1>
            <p className="cities-description">awaiting your arrival!</p>
        </Container>
    )
}

export default CoverCities