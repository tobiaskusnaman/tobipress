const User = require('../models/user');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

class UserController {
  constructor() {

  }
  static register (req,res) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        let newUser = {
          username : req.body.username,
          password : hash
        }
        User.create(newUser)
        .then(newUser => {
          res.send({
            data: newUser,
            msg: 'user has been created'
          })
        })
        .catch(err => {
          res.send({
            msg: 'register error',
            err
          })
        })
      })
    })
  }

  static login(req,res){
    User.findOne({
      username : req.body.username
    })
    .then(user => {
      if (user) {
        bcrypt.compare(req.body.password, user.password)
        .then(function (result) {
          if (result) {
            console.log(user);
            let token = jwt.sign({
                data: user
              }, 'secret');
              res.send({
                msg: `${user.username} is login`,
                data: [token, user]
              })
          } else {
            res.status(200).send({
              msg : 'incorrect email or password'
            })
          }
        })
      }
    })
    .catch(err=>{
      res.status(500).send({
        msg : 'login error',
        err
      })
    })
  }

  static getInfo (req,res) {
    res.send(req.headers.decoded)
  }
}

module.exports = UserController;
