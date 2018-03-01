const mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var UserSchema  = new Schema({
  username : { type: String, index: { unique: true }},
  password : String,
}, { timestamps: true });


module.exports = mongoose.model('User', UserSchema)
