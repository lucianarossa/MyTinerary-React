//mongoose permite crear el modelo
const mongoose = require ("mongoose")

//Defino el esquema (objeto de la colecc).

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: Array, required: true},
    image: {type: String},
    from: {type: Array}

})

const User = mongoose.model("users", userSchema) //crea en la colecc, el schema
module.exports = User //exporto