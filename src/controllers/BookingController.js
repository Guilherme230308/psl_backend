const Booking = require('../models/Booking');

module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { directory_id } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      user: user_id,
      directory: directory_id,
      date,
    })

    await booking.populate('directory').populate('user').execPopulate();

    const ownerSocket = req.connectedUsers[booking.directory.user];

    if (ownerSocket) {
      req.io.to(ownerSocket).emit('booking_request', booking);
    }

    return res.json(booking);
  }
};