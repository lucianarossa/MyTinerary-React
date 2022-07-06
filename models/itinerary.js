//mongoose permite crear el modelo
const mongoose = require("mongoose")

//Defino el esquema (objeto de la colecc).

const itinerarySchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: { type: String, required: true }, //{type:mongoose.Types.ObjectId, ref:"users"}//si quiero el rol
    authorimage: { type: String, required: true }, //{type:mongoose.Types.ObjectId, ref:"users"}//si quiero el rol
    description: { type: String, required: true },
    price: { type: String, required: true },
    duration: { type: String, required: true },
    hashtags: { type: Array, default: [] },
    likes: { type: Array },
    city: { type: mongoose.Types.ObjectId, ref: "cities" }, //con esta propiedad relaciono el itinerario con la ciudad
    comments: [{
        comment: {type: String},
        userId: {type:mongoose.Types.ObjectId, ref:"users"} //con esta propiedad relaciono el/los comentarios del usuario
    }]
})



const Itinerary = mongoose.model("itineraries", itinerarySchema) //crea en la colecc, el schema
module.exports = Itinerary //exporto