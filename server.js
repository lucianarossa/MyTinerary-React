require('dotenv').config()
require('./config/database')

//definimos las variables para importar lo que necesitamos para levantar el servidor

const express = require('express')
const Router = require('./routes/routes')
const app = express()
const cors = require('cors')
const passport = require("passport")
const PORT = process.env.PORT || 4000

//middlewares //puente entre el servidor y la base de datos.

app.use(cors())
app.use(express.json())
app.use(passport.initialize())
app.use('/api', Router)


app.set('port', PORT)

app.get('/', (req, res) => {
    res.send('SERVIDOR CREADO!')
})

app.listen(PORT, () => {
    console.log('SERVIDOR CORRIENDO EN PUERTO: ' + app.get('port'))
})

