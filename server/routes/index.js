var express = require('express');
var router = express.Router();
const User = require('../controllers/user');
const authentication = require('../helpers/authentication');
/* GET users listing. */
router.post('/login', User.login);
router.post('/register', User.register);
router.get('/info', authentication, User.getInfo)

module.exports = router;
