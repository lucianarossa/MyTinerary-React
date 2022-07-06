//mongoose permite crear el modelo
const mongoose = require("mongoose")

//Defino el esquema (objeto de la colecc).

const activitySchema = new mongoose.Schema({
    name:{type:String, required:true},
    image:{type:String, required:true},
    description:{type:String},
    itinerary: {type: mongoose.Types.ObjectId, ref: 'itineraries'}
})



const Activity = mongoose.model("activities", activitySchema) //crea en la colecc, el schema
module.exports = Activity //exporto