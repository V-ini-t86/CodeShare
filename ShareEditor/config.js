'use strict'

const { getMaxListeners } = require("./app")

module.exports={
    mailer:{
        service:'Gmail',
        auth:{
            user:'code4forword@gmail.com',
            pass:'Code4forword123@'
        }
    }, 
    dbConnstring:'mongodb+srv://code4forword:P1aA5HfpO7h9anyw@cluster0.jxbhk.mongodb.net/data?retryWrites=true&w=majority'
}