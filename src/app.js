"use strict";

const express = require('express')
require('dotenv').config()
const { Sequelize } = require('sequelize');
const app = express()
const PORT = process.env.PORT
const router = express.Router()
const mysql = require('mysql')
const cors = require('cors')

let morgan = require('morgan')
let bodyParser = require('body-parser')


// middleware to log the request
app.use(morgan('dev'));

//middleware to parse the http request into the body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


//middleware for cors permission
app.use(cors())


//importing my routes
const userRouter = require('./api/routes/userRoute')
const organizationRouter = require('./api/routes/orgRoute');


//middleware function for the routes.
app.use('/api', userRouter);
app.use('/api', organizationRouter);

const connection = require('./db/connectdb')



// connection to the database
connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });







// connection to the server via port
app.listen(PORT, error =>{
    if(error){
        console.log('connection to the server is lost')
    }else{
        console.log(`port ${PORT} is live and running`)
    }
})