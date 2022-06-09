import React from "react";
import "../styles/cover.css"
import { Container } from "react-bootstrap";
import {Link as LinkRouter} from "react-router-dom"

function Cover() {
    return(
    
        <Container fluid className="cover-container">      
        <video className="cover-video" autoPlay loop muted>
            <source src={process.env.PUBLIC_URL+"/assets/covervideo.mp4"} type='video/mp4'/>
        </video>
        <h1 className="cover-title">MyTinerary</h1>
        <h2 className="cover-subt">find your perfect trip!</h2>
        <p className="slogan">design by insiders who know and love their cities!</p>
        <LinkRouter to= "/BuildingPage" className="Links">
              <button className="call-button"> JOIN THE JOURNEY!
             </button>
        </LinkRouter>
        </Container>
        
    )
}

export default Cover