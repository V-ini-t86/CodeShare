var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer'); //using for mailing contact us form 
var config = require('../config');
var transporter = nodemailer.createTransport(config.mailer);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CodeEditor' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About This website' });
});

router.route('/contact')
.get(function(req,res,next){
  res.render('contact',{title : 'Contact us'});
})
.post(function(req,res,next){
  req.checkBody('name','Invalid Name').notEmpty();
  req.checkBody('mail','Invalid Email').notEmpty();
  req.checkBody('number','Invalid Phone number').notEmpty(); 
  req.checkBody('number','Invalid message').notEmpty(); 

  let errors = req.validationErrors();

  if(errors)
  {
    res.render('contact',{title:'Error',
    name:req.body.name,
    email:req.body.mail,
    number:req.body.number,
    message:req.body.message,
    errorMessages : errors 
  }); 
  }
  else{
    var mailOptions={
      from:'Code4Forword <no-reply@code4forword.com>',
      to:'code4forword@gmail.com ',
      subject:'you got a new mail ' + req.body.mail,
      text : 'Name'+req.body.name+'\n'+'Phone Number'+req.body.number+'\n'+'Message'+req.body.message
    };
    transporter.sendMail(mailOptions, function(error,info){
      if(error)
      {
        return console.log(error);
      }
      res.render('thanks',{title:'Successfully submitted'});
    })
  }
});

router.get('/login',(req,res,next)=>{
  res.render('login', {title:'Login Page'});
});

router.get('/register',(req,res,next)=>{
  res.render('register', {title:'Register Page'});
});

router.get('/board',(req,res,next)=>{
  res.render('board',{title: 'Board'});
})
module.exports = router;
