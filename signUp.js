const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/pro2DB',{useNewUrlParser:true});
const saltRounds = 10;
const bcrypt = require('bcrypt'); //for password encryption

const signUpRouter = express.Router();
signUpRouter.use(upload());
signUpRouter.use(bodyparser.json());

const userSchema=new mongoose.Schema({
    mobileno:String,
    password:String,

})

const User=mongoose.model("User",userSchema);

signUpRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        next();
    });
    signUpRouter.route('/signup1').post((req, res) => {

        var password=req.body.password; 
        var mobileno=req.body.mobileno;
      
        
            bcrypt.hash(password, saltRounds, function(err, hash) {
              
               if(!err){ 
                   const newUser=new User({
                    mobileno:mobileno,
                    password:hash,
                   
                });
                
                newUser.save(function(err){
                    if(err){
                        console.log(err);
                        res.send(err);
                    }else{
                res.send("Registered");
                    }
                });
        
             }else{
                 console.log(err)
             }
            });
        

    });





module.exports = signUpRouter;