const user_service = require('./user_service');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const config = require('./config')
var MongoClient = require('mongodb').MongoClient;
var url = `mongodb://${config.database.hostname}:${config.database.port}/${config.database.name}}`
passport.use( new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
async (email, password, cb) => {
    MongoClient.connect(url, async function (err, db) {
        dbo = db.db(config.database.name)
        try {
            results = await user_service(dbo).authenticate({ email, password })
            if (results.status == false) {
                return cb(null, false, { message: results.message })
            }
            return cb(null, results.user, { message: results.message })
        } catch (error) {
            console.log(error)
            return cb(error, false, {message: error.message})
        }
    })
}) )

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwt_secret
},
    function (jwtPayload, cb) {
        //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
        return cb(null, jwtPayload)
    }
));