const Movie = require('../models/Movie')

const controller = async (req,res) => {
    const {body} = req
    const movie = await Movie.create({
        name: body.name,
        about: body.about,
        yearOfRelease: body.yearOfRelease,
        director: body.director,
        description: body.description,
        avatarURL: body.avatarURL
    })
    res.send(movie)
}

module.exports = controller