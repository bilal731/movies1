const mongoose = require('mongoose')
const Director = require('./Director')

const movieSchema = new mongoose.Schema({
    name: {type: 'string', required: true},
    description: 'string',
    yearOfRelease: {type:'number', required: true},
    author: {type:'ObjectId', ref: Director, required: true}
})

const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie