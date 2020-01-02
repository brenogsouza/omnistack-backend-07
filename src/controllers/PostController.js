const Post = require('../models/Post')

module.exports = {
// listagem de posts
    async index(req, res) {

    },
// criação de posts
    async store(req, res) {
        console.log(req.body)
        return res.json({ok: true})
    }
}