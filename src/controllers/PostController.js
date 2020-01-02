const Post = require('../models/Post');

module.exports = {
	// listagem de posts
	async index(req, res) {},
	// criação de posts
	async store(req, res) {
		const {author, place, description, hashtags} = req.body;
		const {filename: image} = req.file;
        
        const post = await Post.create({
			author,
			place,
			description,
			hashtags,
			image
		});

        console.log(post,'oq veio')
		return res.json(post);
	}
};
