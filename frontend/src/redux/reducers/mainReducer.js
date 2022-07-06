import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itinerariesReducer";
import usersReducer from "./usersReducer";
import countriesReducer from "./countriesReducer";
import activitiesReducer from "./activitiesReducer"


const mainReducer = combineReducers({
    citiesReducer,
    itinerariesReducer,
    usersReducer,
    countriesReducer,
    activitiesReducer
})

export default mainReducer

