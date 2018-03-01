var express = require('express');
var router = express.Router();
const Article = require('../controllers/article');

/* GET home page. */
router.get('/', Article.findAll)
router.post('/create', Article.create)
router.get('/:id', Article.findById)
router.put('/:id/user/:userId', Article.editArticle)
router.delete('/:id/user/:userId', Article.remove)
router.get('/getArticle/:userId', Article.findByAuthorId)
module.exports = router;
// /api/articles/getArticle/:username	GET	Delete article by username
