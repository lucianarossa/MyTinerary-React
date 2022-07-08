//guardo en itinerary lo que cree en models
const Itinerary = require('../models/itinerary')

//guardo los controladores y sus metodos para manioular la base de datos

const itinerariesControllers = {
    getItineraries: async (req, res) => { //devuelve un array 
        let itineraries
        let error = null
        try {
            itineraries = await Itinerary.find()
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : { itineraries },
            success: error ? false : true,
            error: error
        })
    },
    getOneItinerary: async (req, res) => { //devuelve un objeto
        const id = req.params.id
        let itinerary
        let error = null
        try {
            itinerary = await Itinerary.findOne({ _id: id })
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : { itinerary },
            success: error ? false : true,
            error: error
        })
    }
    ,
    addItinerary: async (req, res) => {
        const { name, author, authorimage, description, price, duration, hashtags, likes, city, comments } = req.body.data
        let itinerary
        let error = null
        try {
            city = await new Itinerary({
                name: name,
                author: author,
                authorimage: authorimage,
                description: description,
                price: price,
                duration: duration,
                hashtags: hashtags,
                likes: likes,
                city: city,
                comments: comments
            }).save()
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : itinerary,
            success: error ? false : true,
            error: error
        })
    },

    modifyItinerary: async (req, res) => {
        const id = req.params.id
        const itinerary = req.body
        let itinerarydb
        let error = null
        try {
            itinerarydb = await Itinerary.findOneAndUpdate({ _id: id }, itinerary, { new: true })
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : itinerarydb,
            success: error ? false : true,
            error: error
        })
    },

    removeItinerary: async (req, res) => {
        const id = req.params.id
        let itinerary
        let error = null
        try {
            itinerary = await Itinerary.findOneAndDelete({ _id: id })
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : itinerary,
            success: error ? false : true,
            error: error
        })
    },

    multiplesItineraries: async (req, res) => {
        let itineraries = []
        const data = req.body.data
        let error = null
        try {
            data.map(async (item) => {
                await new Itinerary({
                    name: item.name,
                    author: item.author,
                    authorimage: item.authorimage,
                    description: item.description,
                    price: item.price,
                    duration: item.duration,
                    hashtags: item.hashtags,
                    likes: item.likes,
                    city: item.city,
                    comments: item.comments
                }).save() 
            })
        } catch (err) { error = err }
        itineraries = await Itinerary.find()
        res.json({
            response: error ? "ERROR" : itineraries,
            success: error ? false : true,
            error: error
        })
    },

    getItinerariesByCity: async (req, res) => {
        const id = req.params.id
        let itineraries
        let error = null
        try {
            itineraries = await Itinerary.find({ city: id }).populate("comments.userId", {firstName:1, lastName:1, image:1})
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : itineraries,
            success: error ? false : true,
            error: error
        })
    }, 

    likesDislike: async (req, res) => {
        const id = req.params.itiId //LLEGA X PARAM DESDE AXIOS (ID ITI)
        const user = req.user._id //LLEGA X RESP DE PASSPORT
        console.log(req.params)
        console.log(req.user)

        await Itinerary.findOne({_id:id}) // buscamos un iti que su obj id sea igual al q pasamos x parametro

        .then((itinerary) => {
            console.log(itinerary)
            if (itinerary.likes.includes(user)){ //de ese iti buscamos la prop like y si esa prop incluye el user
                Itinerary.findOneAndUpdate({_id:id}, {$pull: {likes:user}}, {new: true}) //si incluye el user, buscamos el iti p/ actualizarlo x id y utilizamos el metodo pull de mongo (extraer), para extraer el like del usuer y devolver el nuevo user// DESLIKEAR
                .then((response) => res.json({success:true,  response: response.likes}))//devolvemos resp/ PARA ALERTA
                .catch((error) => console.log(error))

            } else { //si la prop like de iti no incluye el user
                Itinerary.findOneAndUpdate({_id:id}, {$push: {likes:user}}, {new: true}) //busca el iti y le hace push (agregar) el like del user /LIKEAR ($push llama al metodo)
                .then((response) => res.json({success:true, response: response.likes}))
                .catch((error) => console.log(error))
            }
        })
        .catch((error) => res.json({success: false, response: error}))
       
    },



}

module.exports = itinerariesControllers