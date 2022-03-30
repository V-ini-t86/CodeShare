var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CodeEditor' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About This website' });
});

router.route('/contact').get(function(req,res,next){
  res.render('contact',{title : 'Contact us'});
})
.post(function(req,res,next){
  req.checkBody('name','Invalid name').notEmpty();
  req.checkBody('email','Invalid email').isEmail();
  req.checkBody('number','Invalid number').notEmpty();
  req.checkBody('message','Empty message').notEmpty();
  var errors = req.getValidationErrors();
  if(errors)
  {
    res.render('error',{
      title:'Error',
      name:req.body.name,
      email:req.body.email,
      number:req.body.number,
      message:req.body.message,
      errorMessage:errors
    
  })
  }
  else
  res.render('out',{title :'Thank you'});
});

module.exports = router;
