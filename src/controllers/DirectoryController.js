const User = require('../models/User');
const Directory = require('../models/Directory');

module.exports = {
  async index(req, res) {
    //const { initial } = req.query;

    const directories = await Directory.find();

    return res.json(directories);
  },

  async store(req, res) {
    const { filename } = req.file;
    const { city } = req.body;
    const { address } = req.body;
    const { president } = req.body;
    const { phone } = req.body;
    const { initials } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    const directory = await Directory.create({
      user: user_id,
      thumbnail: filename,
      city,
      address,
      president,
      phone,
      initials: initials.split(',').map(initial => initial.trim()),
    })

    return res.json(directory)
  }
};