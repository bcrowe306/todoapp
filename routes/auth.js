var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require("passport")
const config = require('../services/config')
const _ = require('lodash')
const user_service = require('../services/user_service')
// Login Route
router.post('/login', function (req, res, next) {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({ message: info.message })
        }
        req.login(user, { session: false }, (err) => {
            if (err) {
                res.send(err);
            }
            // generate a signed son web token with the contents of user object and return it in the response
            const token = jwt.sign(user, config.jwt_secret, { expiresIn: config.session_time });
            return res.json({ user, token });
        });
    })(req, res);
});

router.post('/signup', async (req, res, next) => {
    let newUser = _.pick(req.body, ['name', 'email', 'password'])
    try {
        results = await user_service(req.app.locals.db).create(newUser)

        return res.json(results)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    
});
router.post('/user', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json(req.user)
})

module.exports = router;
