const express = require('express')
const app =  express()
const port = 3015
const bodyParser = require('body-parser')
const routes =  require('./routes')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser: true, useUnifiedTopology: true});

app.set('view engine', 'pug')
app.set('views', './views')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(routes)

app.listen(port, () =>{
    console.log(`Your app is running on ${port}`)
})