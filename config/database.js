
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology: true, //MOTOR DE ADMIN. DE CONEXION CON MONGO // NUEVO MOTOR
    useNewUrlParser: true, //PERMITE USAR EL ANALIZADOR ANT SI EL NUEVO FALLA
})

.then(()=>console.log("Database connected"))
.catch(err => console.log(err))