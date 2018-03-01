const User = require('../models/user');

class UserController {
  constructor() {

  }
  static register (req,res) {
    let newUser = {
      username : req.body.username,
      password : req.body.password
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
  }

  static login(req,res){
    User.findOne({
      username : req.body.username,
      password: req.body.password
    })
    .then(user => {
      res.send({
        data: user,
        msg: `${user.username} is login`
      })
    })
    .catch(err=>{
      res.status(500).send({
        msg : 'login error',
        err
      })
    })
  }
}

module.exports = UserController;
