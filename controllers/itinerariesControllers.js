//guardo en city lo que cree en models
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
        const { name, author, authorimage, description, price, duration, hashtags, likes, activities, city } = req.body.data  
        let itinerary
        let error = null
        try {
            city = await new Itinerary({    
                name: name,
                username: author,
                userimage: authorimage,
                description: description,
                price: price,
                duration: duration,
                hashtags: hashtags,
                likes: likes,
                activities: activities,
                city: city
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
            itinerarydb = await Itinerary.findOneAndUpdate({ _id: id }, itinerary, {new:true}) 
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
                    activities: item.activities,
                    city: item.city
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

    getItinerariesByCity: async (req,res) => {
        const id = req.params.id
        let itineraries
        let error = null
        try {
            itineraries = await Itinerary.find({ city : id })
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : itineraries,
            success: error ? false : true,
            error: error
        })
    }

}

module.exports = itinerariesControllers