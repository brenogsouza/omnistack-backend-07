const express = require('express')
const mongoose = require('mongoose')

const app = express();
mongoose.connect('mongodb+srv://instaclone:12345@meubanco-tgxc0.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.get('/', (req, res) => {
  return res.send('ola mundo')
})

app.listen(3333)