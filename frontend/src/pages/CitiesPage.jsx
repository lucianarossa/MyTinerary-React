import React from "react";
import CoverCities from "../components/CoverCities";
import "../styles/cities.css";
import Cities from "../components/Cities";


function CitiesPage (){
    return(
       <>
       <CoverCities/>
       <Cities/>
       </>     
)
}

export default CitiesPage;