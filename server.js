const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const port = process.env.PORT || 8000;

const app = express();
require('dotenv').config();
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/signup', require('./signUp'));
app.use('/userAuth', require('./login'));

//messaging
function myFunction(no,message) {
    
    var numbers=[];
    var length=no.length;

    for(var i=0;i<length;i++){
        numbers.push(JSON.stringify({binding_type:'sms',address:'+91'+no[i]}));
        }

    
    var accountSid=process.env.ACCOUNT_SID;
    var authToken=process.env.AUTH_TOKEN;
    var SERVICE_SID=process.env.SID
    var client=require('twilio')(accountSid,authToken);

    const notificationOpts={
        toBinding:numbers,
        body:message
      };
      
    client.notify.services(SERVICE_SID).notifications.create(notificationOpts).then(notification=>console.log(notification.sid)).catch(error=> console.log("ERROR:",error));

  }

app.get('/', (req,res) => {
    res.status(200).json({
        message: 'Server Started'
    })
});

app.use('*' , (req,res) => {
    res.status(404).json({
        message: 'Route not found'
    })
});

app.listen(port , (err) => {
    if(err){
        console.error(`Error : ${err}`);
    }
    else{
        console.log('Server Started');
    }
})