const express = require('express')
const multer = require('multer')

const uploadConfig = require('./configs/upload')

const routes = new express.Router()
const upload = multer(uploadConfig)

// CONTROLLERS
const PostController = require('./controllers/PostController')

// ROTAS POST
routes.post('/posts', upload.single('image'), PostController.store)

// ROTAS GET
routes.get('/posts', PostController.index)

module.exports = routes