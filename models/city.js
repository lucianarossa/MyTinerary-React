
//mongoose permite crear el modelo
const mongoose = require ("mongoose")

//Defino el esquema (objeto de la colecc).

const citySchema = new mongoose.Schema({
    name: {type: String, required: true},
    country: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true}

})



const City = mongoose.model("cities", citySchema) //crea en la colecc, el schema
module.exports = City //exporto