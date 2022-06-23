
const Router = require ("express").Router(); // le pido a express que me traiga router para definir las rutas

const citiesControllers = require('../controllers/citiesControllers');//importo mi controlador
const itinerariesControllers = require ('../controllers/itinerariesControllers');

const {getCities, getOneCity, addCity, modifyCity, removeCity, multiplesCities} = citiesControllers;
const {getItineraries, getOneItinerary, addItinerary, modifyItinerary, removeItinerary, multiplesItineraries, getItinerariesByCity} = itinerariesControllers; 


//RUTAS CITIES

Router.route('/cities') //creo el endpoint de la ruta
.get(getCities)
.post(addCity)

Router.route('/cities/:id')
.delete(removeCity)
.put(modifyCity)
.get(getOneCity)

Router.route("/multiplesCities")
.post(multiplesCities)


//RUTAS ITINERARIES

Router.route('/itineraries')
.get(getItineraries)
.post(addItinerary)

Router.route('/itineraries/:id')
.delete(removeItinerary)
.put(modifyItinerary)
.get(getOneItinerary)

Router.route("/multiplesitineraries")
.post(multiplesItineraries) 

Router.route("/itinerarybycity/:id")
.get(getItinerariesByCity)


module.exports = Router