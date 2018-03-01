const mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ArticleSchema  = new Schema({
  title : String,
  content : String,
  userId : {
    type: Schema.Types.ObjectId, ref : 'User'
  },
  category: String
}, { timestamps: true });

module.exports = mongoose.model('Article', ArticleSchema)
