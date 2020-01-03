const express = require('express')
const multer = require('multer')

const uploadConfig = require('./configs/upload')

const routes = new express.Router()
const upload = multer(uploadConfig)

// CONTROLLERS
const PostController = require('./controllers/PostController')
const LikeController = require('./controllers/LikeController')

// ROTAS POST
routes.post('/posts', upload.single('image'), PostController.store)
routes.post('/posts/:id/likes', LikeController.store)

// ROTAS GET
routes.get('/posts', PostController.index)

module.exports = routes