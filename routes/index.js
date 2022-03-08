var express = require('express');
var router = express.Router();
const passport = require('passport')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile('index.html', {
    root: path.join('./public')
  });
});


router.use('/auth', require('./auth'))
router.use('/api', passport.authenticate('jwt', { session: false }), require('./api'))

module.exports = router;
