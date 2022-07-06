
const Router = require("express").Router(); // le pido a express que me traiga router para definir las rutas
const validator = require("../config/validator")
const citiesControllers = require('../controllers/citiesControllers');
const itinerariesControllers = require('../controllers/itinerariesControllers');
const usersControllers = require('../controllers/usersControllers')
const countriesControllers = require("../controllers/countriesControllers")
const activitiesControllers = require ("../controllers/activitiesControllers")
const commentsControllers = require ("../controllers/commentsControllers")

const { getCities, getOneCity, addCity, modifyCity, removeCity, multiplesCities } = citiesControllers;
const { getItineraries, getOneItinerary, addItinerary, modifyItinerary, removeItinerary, multiplesItineraries, getItinerariesByCity } = itinerariesControllers;
const { signUpUsers, logInUser, verifyMail, verifyToken } = usersControllers
const { getCountries, addCountry, multiplesCountries } = countriesControllers
const { getActivities, getOneActivity, addActivity, modifyActivity, removeActivity, multiplesActivities, getActivitiesByItinerary } = activitiesControllers;
const passport = require("../config/passport");
const { likesDislike } = require("../controllers/itinerariesControllers");
const { addComment, deleteComment, modifyComment} = commentsControllers




//RUTAS CITIES

Router.route('/cities')
    .get(getCities)
    .post(addCity)

Router.route('/cities/:id')
    .delete(removeCity)
    .put(modifyCity)
    .get(getOneCity)

Router.route("/multiplesCities")
    .post(multiplesCities)


//RUTAS ITINERARIES

Router.route('/itineraries')
    .get(getItineraries)
    .post(addItinerary)

Router.route('/itineraries/:id')
    .delete(removeItinerary)
    .put(modifyItinerary)
    .get(getOneItinerary)

Router.route("/multiplesitineraries")
    .post(multiplesItineraries)

Router.route("/itinerarybycity/:id")
    .get(getItinerariesByCity)

// RUTA LIKES

Router.route("/itineraries/like/:itiId")
.put(passport.authenticate("jwt", {session: false}), likesDislike)//primero pasa x passport, me devuelve el ID, y luego al controll LIKEDISLIKE

//RUTAS COMMENTS

Router.route("/itineraries/comment")
.post(passport.authenticate("jwt", {session: false}), addComment)
.put(passport.authenticate("jwt", {session: false}), modifyComment)

Router.route("/itineraries/comment/:id")
.post(passport.authenticate("jwt", {session: false}), deleteComment)




// RUTAS USERS

Router.route('/auth/signup')
    .post(validator, signUpUsers)

Router.route('/auth/login')
    .post(logInUser)

Router.route("/verify/:string")
    .get(verifyMail)

Router.route('/auth/token')
    .get(passport.authenticate('jwt', { session: false }), verifyToken)

// RUTAS COUNTRIES

Router.route('/countries')
    .get(getCountries)
    .post(addCountry)

Router.route("/multiplesCountries")
    .post(multiplesCountries)

//RUTAS ACTIVITIES

Router.route('/activities')
    .get(getActivities)
    .post(addActivity)

Router.route('/activities/:id')
    .delete(removeActivity)
    .put(modifyActivity)
    .get(getOneActivity)

Router.route("/multiplesactivities")
    .post(multiplesActivities)

Router.route("/activitiesbyitinerary/:id")
    .get(getActivitiesByItinerary)



module.exports = Router