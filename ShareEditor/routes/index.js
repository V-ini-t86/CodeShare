var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CodeEditor' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About This website' });
});
router.route('/contact')
.get(function(req, res, next) {
  res.render('contact', { title: 'CodeShare Platform is a good for dry run the code.'});
})
.post(function (req,res,next) {
  res.render('thank',{ title : 'CodeShare Platform is a good for dry run the code.'});
}) 
module.exports = router;
