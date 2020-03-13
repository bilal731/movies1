const mongoose =  require('mongoose')

const directorSchemma = new mongoose.Schema({
    name: {type: 'string',  required: true},
    about:'string',
    email: {type: 'string',  required: true, unique: true},
    avatarURL:'string',
})

const Director = mongoose.model('Director', directorSchemma)
module.exports = Director;