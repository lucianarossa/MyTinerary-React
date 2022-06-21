//mongoose permite crear el modelo
const mongoose = require ("mongoose")

//Defino el esquema (objeto de la colecc).

const itinerarySchema = new mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    userimage: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: String, required: true},
    duration: {type: String, required: true},
    hashtags: {type: String, required: true},
    likes: {type: String, required: true}

})



const Itinerary = mongoose.model("itineraries", itinerarySchema) //crea en la colecc, el schema
module.exports = Itinerary //exporto