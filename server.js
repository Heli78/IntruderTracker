const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const port = process.env.PORT || 8000;

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

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