//mongoose permite crear el modelo
const mongoose = require ("mongoose")

//Defino el esquema (objeto de la colecc).

const countrySchema = new mongoose.Schema({
    country: {type: String, required: true},
})



const City = mongoose.model("countries", countrySchema) //crea en la colecc, el schema
module.exports = City //exporto