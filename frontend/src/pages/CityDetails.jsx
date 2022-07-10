import React from "react";
import "../styles/itinerary.css";
import { Container } from "react-bootstrap";
import "../styles/details.css"
import { useParams } from "react-router-dom"
import { Link as LinkRouter } from "react-router-dom"
import { useEffect, useState } from "react"
import Itinerary from "../components/Itinerary"
import { useDispatch, useSelector } from "react-redux"
import citiesActions from "../redux/actions/citiesActions";
import itinerariesActions from "../redux/actions/itinerariesActions";
import NotFoundItinenary from "../components/NotFoundItinerary";


function CityDetails() {
  const { id } = useParams() //recibe el id, desestructura el parametro con el metodo useparams
  const dispatch = useDispatch()
  const [reload, setReload] = useState(false)
  // const [itineraries, setItineraries] = useState()
  

  useEffect(() => {
   
   dispatch(citiesActions.getOneCity(id))
   dispatch(itinerariesActions.getItinerariesByCity(id))
  
  
    // eslint-disable-next-line
  }, [id, reload])


  function reloadChanger(){
    setReload(!reload)
  }
  // console.log("ITI DE DETAILS", itineraries)

  const city = useSelector(store => store.citiesReducer.getOneCity)
  const itineraries = useSelector(store => store.itinerariesReducer.getItinerariesByCity)

  return (
    <>
      <Container fluid className="details-container" key={city?._id}>
        <img width="100%" className="details-image" src={process.env.PUBLIC_URL + `${city?.image}`} alt="cities" />
        <div className="overlay-cities"></div>
        <p className="details-description">{city?.phrase}</p>
        <h1 className="details-title">{city?.name}</h1>
      </Container>
      <Container fluid className="details-main">
        <h1 className="itineraries-title">Itineraries</h1>

        {itineraries?.length > 0 ?
          itineraries?.map((itinerary, index) =>
            <Itinerary data={itinerary} key={index} setChangeReload={reloadChanger} id={id} />) : <NotFoundItinenary />}

        <LinkRouter to="/citiespage" className="Links">
          <button className="call-button"> BACK TO CITIES!
          </button>
        </LinkRouter>

      </Container>
    </>
  )
}

export default CityDetails