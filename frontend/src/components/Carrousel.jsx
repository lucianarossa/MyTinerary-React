import React from "react";
import "../styles/carrousel.css"
import Carousel from 'react-grid-carousel'
import { useState, useEffect } from "react"
import axios from "axios"


function Carrousel() {

  const [cities, setCities] = useState()

  useEffect(() => {
    axios.get("http://localhost:4000/api/cities")
        .then(response => setCities(response.data.response.cities))
       
}, [])


  return (
    <div className="carrousel-container">
      <h1 className="carrousel-title">Popular MyTineraries</h1>
      <Carousel cols={2} rows={2} gap={10} loop autoplay={2000} showDots
        mobileBreakpoint={300}
        responsiveLayout={[{
          breakpoint: 750,
          cols: 1,
          rows: 4,
          gap: 5,
          loop: true
        }]}>
        {cities?.map(city => (
          <Carousel.Item className="carrousel" key={city._id}>

            <img width="100%" className="carrousel-img" src={process.env.PUBLIC_URL + `${city.image}`} alt="cities" />
            <h2 className="city-title">{city.name}</h2>
            <h3 className="country-title">{city.country}</h3>

          </Carousel.Item>
        ))}

      </Carousel>
    </div>


  )
}

export default Carrousel