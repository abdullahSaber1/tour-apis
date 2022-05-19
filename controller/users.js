const USERS = require('../model/userModel');

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await USERS.find();

      res.json({
        status: 'succuss',
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        status: 'failuar',
        message: error.message,
      });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await USERS.findById(req.params.id);

      if (user === null) {
        return res.status(404).json({
          status: 'failuar',
          message: 'user Not Found',
        });
      }

      res.json({
        status: 'succuss',
        data: user,
      });
    } catch (error) {
      res.status(400).json({
        status: 'failuar',
        message: error.message,
      });
    }
  },
  createNewUsers: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const user = await USERS.create({ name, email, password });

      res.json({
        status: 'succuss',
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        status: 'failuar',
        message: error.message,
      });
    }
  },

  updateUserById: async (req, res) => {
    try {
      const user = await USERS.findByIdAndUpdate(req.params.id);

      if (user === null) {
        return res.status(404).json({
          status: 'failuar',
          message: 'user Not Found',
        });
      }

      res.json({
        status: 'succuss',
        data: user,
      });
    } catch (error) {
      res.status(400).json({
        status: 'failuar',
        message: error.message,
      });
    }
  },

  deleteUserById: async (req, res) => {
    try {
      const user = await USERS.findByIdAndDelete(req.params.id);
      if (user === null) {
        return res.status(404).json({
          status: 'failuar',
          message: 'user Not Found',
        });
      }

      res.json({
        status: 'succuss',
        data: user,
      });
    } catch (error) {
      res.status(400).json({
        status: 'failuar',
        message: error.message,
      });
    }
  },
};
