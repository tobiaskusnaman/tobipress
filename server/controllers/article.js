const Article = require('../models/article');

class ArticleController {
  constructor() {

  }
  static create(req,res){
    let newArticle = {
      title : req.body.title,
      content : req.body.content,
      userId : req.body.userId,
      category : req.body.category
    }
    Article.create(newArticle)
    .then(newArticle => {
      res.status(200).send({
        msg : 'a new article has been created',
        data : newArticle
      })
    })
    .catch(err => {
      res.status(500).send({
        msg : 'create article error',
        err
      })
    })
  }

  static findAll(req,res){
    Article.find()
    .populate('userId')
    .exec(function (err, articlePopulate) {
      if (!err) {
        res.send({
          msg : 'find all article',
          data : articlePopulate
        })
      } else {
        res.send({
          msg: 'Could not get articles',
          err
        })
      }
    });
  }

  static findById(req,res){
    Article.findOne({
      _id : req.params.id
    })
    .populate('authorId')
    .exec(function (err, articlePopulate) {
      if (!err) {
        res.send({
          msg : 'find an article',
          data : articlePopulate
        })
      } else {
        res.send({
          msg: 'Could not get an articles',
          err
        })
      }
    });
  }

  static editArticle(req,res){
    Article.findOne({
      '_id' : req.params.id,
    })
    .then(foundArticle => {
      let authorId = req.params.userId
      let articleAuthorId = foundArticle.userId
      if (authorId == articleAuthorId) {
        let articleEdited = {
          title : req.body.title,
          content : req.body.content,
          category : req.body.category
        }
        Article.findOneAndUpdate({
          '_id' : req.params.id
        }, articleEdited)
        .then(article => {
          console.log(article);
          Article.findOne({
            '_id' : article._id
          })
           .then(result => {
             res.send({
               msg : 'an article has been edited',
               data : result
             })
           })
           .catch(err => {
             res.send({
               msg: 'edit article failed',
               err
             })
           })
        })
      } else {
        res.status(403).send({
          msg : 'forbidden access, must be the author can access this article',
        })
      }
    })
    .catch(err => {
      res.send({
        msg : 'edit article error',
        err
      })
    })
  }

  static remove(req,res){
    Article.findOne({
      userId : req.params.userId,
      _id : req.params.id
    })
    .then(foundArticle=> {
      console.log(foundArticle);
      if (foundArticle) {
        Article.remove({
          '_id' : req.params.id,
        })
        .then(article => {
          res.send({
            msg : 'article has been deleted',
            article
          })
        })
        .catch(err => {
          res.send({
            msg : 'delete an article is error',
            err
          })
        })
      } else {
        res.send('forbidden access,  must be the author can delete this article')
      }
    })
  }

  static findByAuthorId(req,res) {
    console.log(req.params.userId);
    Article.find({
      userId : req.params.userId
    })
    .then(articles=> {
      console.log(articles);
      res.send({
        msg : `found articles`,
        data : articles
      })
    })
    .catch(err => {
      res.send(err)
    })
  }
}

module.exports = ArticleController;
