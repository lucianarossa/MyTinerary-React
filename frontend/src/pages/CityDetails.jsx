import React from "react";
import "../styles/itinerary.css";
import { Container } from "react-bootstrap";
import "../styles/details.css"
import { useParams } from "react-router-dom"
import { Link as LinkRouter } from "react-router-dom"
import { useEffect } from "react"
import Itinerary from "../components/Itinerary"
import { useDispatch, useSelector } from "react-redux"
import citiesActions from "../redux/actions/citiesActions";

function CityDetails() {
  const { id } = useParams() //recibe el id, desestructura el parametro con el metodo useparams
  const dispatch = useDispatch()

  useEffect(() => {
   
           dispatch(citiesActions.getOneCity(id))
           // eslint-disable-next-line
  }, [])
  
  const city = useSelector( store => store.citiesReducer.getOneCity) 

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