//guardo en itinerary lo que cree en models
const Activity = require('../models/activity')

//guardo los controladores y sus metodos para manioular la base de datos

const activitiesControllers = {
    getActivities: async (req, res) => { //devuelve un array 
        let activities
        let error = null
        try {
            activities = await Activity.find()
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : { itineraries },
            success: error ? false : true,
            error: error
        })
    },
    getOneActivity: async (req, res) => { //devuelve un objeto
        const id = req.params.id
        let activity
        let error = null
        try {
            activity = await Activity.findOne({ _id: id })
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : { activity },
            success: error ? false : true,
            error: error
        })
    }
    ,
    addActivity: async (req, res) => {
        const { name, image, itinerary } = req.body.data
        let activityadded
        let error = null
        try {
            activityadded = await new Activity({
                name: name,
                image: image,
                itinerary: itinerary
            }).save()
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : activityadded,
            success: error ? false : true,
            error: error
        })
    },

    modifyActivity: async (req, res) => {
        const id = req.params.id
        const activity = req.body
        let activitydb
        let error = null
        try {
            activitydb = await Activity.findOneAndUpdate({ _id: id }, activity, { new: true })
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : activitydb,
            success: error ? false : true,
            error: error
        })
    },

    removeActivity: async (req, res) => {
        const id = req.params.id
        let activity
        let error = null
        try {
            activity = await Activity.findOneAndDelete({ _id: id })
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : activity,
            success: error ? false : true,
            error: error
        })
    },

    multiplesActivities: async (req, res) => {
        let activities = []
        const data = req.body.data
        let error = null
        try {
            data.map(async (item) => {
                await new Activity({
                    name: item.name,
                    image: item.image,
                    description: item.description,
                    itinerary: item.itinerary
                }).save()
            })
        } catch (err) { error = err }
        activities = await Activity.find()
        res.json({
            response: error ? "ERROR" : activities,
            success: error ? false : true,
            error: error
        })
    },

    getActivitiesByItinerary: async (req, res) => {
        const id = req.params.id
        // console.log("IDCONTROLLER", id)
        let activities
        let error = null
        try {
            activities=await Activity.find({itinerary:id})
            // console.log("activitiescontroll", activities)
        } catch (err) {

            error = err
        }
        res.json({
            console: console.log(error),
            response: error ? 'ERROR' : activities,
            success: error ? false : true, 
            error: error
        })
    }

}

module.exports = activitiesControllers