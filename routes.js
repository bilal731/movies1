const express  = require('express')
const router  = express.Router()
const getMovies  = require('./controllers/get-movies')
const createMovie  = require('./controllers/create-movie')
const createDirector = require('./controllers/create-director')


router.get('/', (req,res) => {
    res.send('Hello World')
})

router.get('/movies', getMovies)
router.post('/movie', createMovie)
router.post('/director', createDirector)

module.exports = router 