var express = require('express');
var router = express.Router();
const User = require('../controllers/user');
/* GET users listing. */
router.post('/login', User.login);
router.post('/register', User.register);

module.exports = router;
