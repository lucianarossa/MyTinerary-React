const passport = require("passport")
const jwtStrategy = require("passport-jwt").Strategy
const extractJwt = require("passport-jwt").ExtractJwt

const User = require("../models/user")

module.exports = passport.use(new jwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(), //extrae el token y autentica
    secretOrKey: process.env.SECRET_KEY //llamo a la variable secretkey que desencripta el token
}, (jwt_payload, done) => {
    // console.log(jwt_payload)
    User.findOne({ _id: jwt_payload.id })

        .then(user => {
            // console.log(user)
            if (user) {
                return done(null, user)
            }
            else if (err) {
                // console.log(err)
                return done(err, false)
            } else {
                return done(null, false)
            }
        })
        .catch(err => {
            // console.log(err.status)
            return done(err.false)
        })
}
))