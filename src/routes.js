const express = require('express')
const routes = new express.Router()


// CONTROLLERS
const PostController = require('./controllers/PostController')

// ROTAS POST
routes.post('/posts', PostController.store)

module.exports = routes