const Director = require('../models/Director')

const controller = async (req,res) => {
    const {body} = req
    const director = await Director.create({
        name: body.name,
        about: body.about,
        email: body.email,
        avatarURL: body.avatarURL
    })
    res.send(director)
}

module.exports = controller