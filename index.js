const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const ejs = require('ejs');
const homeRoute = require('./routes/home');


const app = express();


// middlewares
app.set('view engine', ejs);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));


//Routes
app.get("/", homeRoute)

app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`)
})