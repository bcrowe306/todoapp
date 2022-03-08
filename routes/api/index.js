var express = require('express');
var router = express.Router();

router.use('/todos', require('./todo'))

module.exports = router;
