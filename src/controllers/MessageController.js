const Message = require('../models/Message');

module.exports = {
  async index(req, res) {
    const { message } = req.query;

    const messages = await Message.find({ messages: message });

    return res.json(messages);
  },

  async store(req, res) {
    const { date, text, city, sender, receiver } = req.body;

    //let message = await Message.findOne({ message });

    //if (!message) {

     let message = await Message.create({ date, text, city, sender, receiver, });

    //}

    return res.json(message);

    
  }


};
