const express = require('express')
const multer = require('multer')

const routes = new express.Router()
const upload = multer()

// CONTROLLERS
const PostController = require('./controllers/PostController')

// ROTAS POST
routes.post('/posts',upload.single('image'), PostController.store)

module.exports = routes