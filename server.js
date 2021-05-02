const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const notify = require('./notify');
const updateLocation = require('./updateLocation');
const port = process.env.PORT || 8000;

const app = express();
require('dotenv').config();
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/signup', require('./signUp'));
app.use('/userAuth', require('./login'));



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

app.post('/notify', notify);
app.post('/update', updateLocation);

app.listen(port , (err) => {
    if(err){
        console.error(`Error : ${err}`);
    }
    else{
        console.log('Server Started');
    }
})