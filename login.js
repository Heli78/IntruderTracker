const express = require('express');
const bodyparser = require('body-parser');

const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); //for password encryption
mongoose.connect('mongodb://localhost:27017/pro2DB',{useNewUrlParser:true});


const userSchema=new mongoose.Schema({
    mobileno:String,
    password:String,

})

const User=mongoose.model("User",userSchema);

const loginRouter = express.Router();
loginRouter.use(bodyparser.json());



loginRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        next();
    })
    .post((req, res) => {
      

        const mobileno=req.body.mobileno;
        const password=req.body.password;
    
        User.findOne({mobileno:mobileno},function(err,result){
            if(!err){
                if(result){
                    bcrypt.compare(password,result.password, function(err1, response) {
                     if(response===true){
                       res.send("Right credentials");
                     }
                     if(response===false){
                        res.send("wrong credentials");
                      }
            console.log(err1);
                    }); 
                }
            }else{
         console.log(err);
            }
    
        })
    

    });

    module.exports = loginRouter;