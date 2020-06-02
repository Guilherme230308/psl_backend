const User = require('../models/User');
const Directory = require('../models/Directory');

module.exports = {
  async index(req, res) {
    const { email } = req.query;

    const emails = await User.find({ emails: email });

    return res.json(emails);
  },

  async store(req, res) {
    const { email, name, surname, city, senha, confirmaSenha } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      let user = await User.create({ email, name, surname, city, senha, confirmaSenha });
    }


    return res.json(user);

  }


};