const Post = require("../models/Post");

const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

module.exports = {
  // listagem de posts
  async index(req, res) {
    const posts = await Post.find().sort("-createdAt");

    return res.json(posts);
  },
  // criação de posts
  async store(req, res) {
    const { author, place, description, hashtags } = req.body;
		const { filename: image } = req.file;
		
		// definindo formato da image
		const [name] =  image.split('.')
		const filename = `${name}.jpg`

    // tratando o redimensionamento da imagem
    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70 })
      .toFile(path.resolve(req.file.destination, "resized", filename));
		
		// excluir imagem atual sem tratramento
		fs.unlinkSync(req.file.path)

    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image: filename
    });
    return res.json(post);
  }
};
