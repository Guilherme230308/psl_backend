const News = require('../models/News');

module.exports = {
  async index(req, res) {

    const listNews = await News.find();

    return res.json(listNews);
  },

  async store(req, res) {
    const { filename } = req.file;
    const { text } = req.body;

    const news = await News.create({
      thumbnail: filename,
      text
    })

    return res.json(news)
  }
};