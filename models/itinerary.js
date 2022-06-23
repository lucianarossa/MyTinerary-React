//mongoose permite crear el modelo
const mongoose = require ("mongoose")

//Defino el esquema (objeto de la colecc).

const itinerarySchema = new mongoose.Schema({
    name: {type: String, required: true},
    author: {type: String, required: true},
    authorimage: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: String, required: true},
    duration: {type: String, required: true},
    hashtags: {type: Array, default: []},
    likes: {type: String},
    activities: {type: String},
    city: {type: mongoose.Types.ObjectId, ref: "cities"} //con esta propiedad relaciono el itinerario con la ciudad

})



const Itinerary = mongoose.model("itineraries", itinerarySchema) //crea en la colecc, el schema
module.exports = Itinerary //exporto