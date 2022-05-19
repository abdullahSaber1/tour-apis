const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { isEmail } = require('validator');

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: isEmail,
      message: 'Enter a valid email',
    },
  },
  role: {
    type: String,
  },
  active: {
    type: Boolean,
    // required: true,
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
  },
});

usersSchema.pre('save', async function (next) {
  console.log('before', this.password);

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.password, salt);

  this.password = hash;

  console.log('After', hash);

  next();
});

const userModel = mongoose.model('users', usersSchema);

module.exports = userModel;
