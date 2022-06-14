import React from "react";
import { Container } from "react-bootstrap";
import "../styles/details.css"
import { useParams} from "react-router-dom"
import Cities from "../data.json"
import {Link as LinkRouter} from "react-router-dom"


function CityDetails(){
    const {id} = useParams() //recibe el id, desestructura el parametro con el metodo useparams
    const cities = Cities.filter (city => city.id === id) // cities es igual al filter del id y lo igualamos al id que viene como parametro.

    return(
        <>
        {cities.map((city) =>
        <>
         <Container fluid className="details-container" key={city.id}>
           <img className= "details-image" src={process.env.PUBLIC_URL+`${city.image}`} alt="backround" />
           {console.log(city.image)}
           <p className="details-description">enjoy</p>
           <h1 className="details-title">{city.name}</h1>
         </Container> 
         <Container fluid className="details-main"> 
              <h1 className="biulding-title">UNDER CONSTRUCTION</h1>
              <h2 className="biulding-subt">We are working hard to make this website available!</h2>
              <img className= "plane-image" src={process.env.PUBLIC_URL+"/assets/plane.png"} alt="Plane" />
             <LinkRouter to= "/citiespage" className="Links">
              <button className="call-button"> BACK TO CITIES!
              </button>
             </LinkRouter>
         </Container>
       </>
           )}
        </> 
 
       
    )}

export default CityDetails