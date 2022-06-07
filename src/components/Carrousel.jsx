import React from "react";
import "../styles/carrousel.css"
import Carousel from 'react-bootstrap/Carousel'


function Carrousel() {
    return(
       
        <div className="carrousel-container">
            <h1 className="carrousel-title">Popular MyTineraries</h1>
            <Carousel variant="dark" className="carrousel">
        <Carousel.Item>
          <img
            className="d-block w-100 carrousel-img"
            src={process.env.PUBLIC_URL+"/assets/paris-france.jpg"}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carrousel-img"
            src={process.env.PUBLIC_URL+"/assets/barcelona-spain.jpg"}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carrousel-img"
            src={process.env.PUBLIC_URL+"/assets/viena-austria.jpg"}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
        
   
    )
}

export default Carrousel