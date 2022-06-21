import React from "react";
import "../styles/itinerary.css";
import { Container } from "react-bootstrap";
import "../styles/details.css"
import { useParams } from "react-router-dom"
import { Link as LinkRouter } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import Itinerary from "../components/Itinerary"

function CityDetails() {
  const { id } = useParams() //recibe el id, desestructura el parametro con el metodo useparams
  const [city, setCity] = useState()

  useEffect(() => {
    axios.get(`http://localhost:4000/api/cities/${id}`)
      .then(resp => setCity(resp.data.response.city))
   
  }, [id])


  return (
    <>
      <Container fluid className="details-container" key={city?._id}>
        <img className="details-image" src={process.env.PUBLIC_URL + `${city?.image}`} alt="backround" />
        <p className="details-description">enjoy</p>
        <h1 className="details-title">{city?.name}</h1>
      </Container>
      <Container fluid className="details-main">
        <h1 className="itineraries-title">Itineraries</h1>
        <Itinerary/>
        <LinkRouter to="/citiespage" className="Links">
          <button className="call-button"> BACK TO CITIES!
          </button>
        </LinkRouter>
      </Container>
    </>
  )
}

export default CityDetails