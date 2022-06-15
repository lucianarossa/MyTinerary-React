import React from "react";
import "../styles/cover.css"
import { Container } from "react-bootstrap";


function CoverHome() {
    return (

        <Container fluid className="cover-container">
            <video className="cover-video" autoPlay loop muted>
                <source src={process.env.PUBLIC_URL + "/assets/covervideo.mp4"} type='video/mp4' />
            </video>
            <h1 className="cover-title">MyTinerary</h1>
            <h2 className="cover-subt">find your perfect trip!</h2>
            <p className="slogan">design by insiders who know and love their cities!</p>
        </Container>

    )
}

export default CoverHome