import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itinerariesReducer";
import usersReducer from "./usersReducer";
import countriesReducer from "./countriesReducer";


const mainReducer = combineReducers({
    citiesReducer,
    itinerariesReducer,
    usersReducer,
    countriesReducer
})

export default mainReducer

