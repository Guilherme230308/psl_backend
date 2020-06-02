const Directory = require('../models/Directory');

module.exports = {
  async show(req, res) {
    //const { user_id } = req.headers;

    const directories = await Directory.find();
    
    //const directories = await Directory.find({ user: user_id });


    return res.json(directories);
  }
}