const bcrypt = require('bcryptjs');
const USERS = require('../model/userModel');

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;

    // find email
    const user = await USERS.findOne({ email });

    // match passwords
    const match = await bcrypt.compare(password, user.password);

    if (user && match) {
      res.json('Logged in succuss');
    } else {
      res.json('wrong userName or Password');
    }
  },
};
