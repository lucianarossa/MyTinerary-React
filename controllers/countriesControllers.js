//guardo en city lo que cree en models
const Country = require('../models/country')

//guardo los controladores y sus metodos para manioular la base de datos

const countriesControllers = {
    getCountries: async (req, res) => { //devuelve un array 
        let countries 
        let error = null 
        try {
            countries = await Country.find() 
        } catch (err) { error = err } 
        res.json({
            response: error ? 'ERROR' : { countries },
            success: error ? false : true,
            error: error
        })
    },

    addCountry: async (req, res) => {
        const { country } = req.body.data  
        let onecountry
        let error = null
        try {
            onecountry = await new Country({    
                country: country,
            }).save() 
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : country,
            success: error ? false : true,
            error: error
        })
    },

    multiplesCountries: async (req, res) => {
        let country = []
        const data = req.body.data 
        let error = null
        try {
            data.map(async (item) => {
                await new Country({
                    country: item.country,
                }).save()
            })
        } catch (err) { error = err }
        country = await Country.find()
        res.json({
            response: error ? "ERROR" : country,
            success: error ? false : true,
            error: error
        })
    }, 
}

module.exports = countriesControllers