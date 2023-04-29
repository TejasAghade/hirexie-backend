const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userFirstName: {
    type: String,
    required: true
  },
  userLastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isEmployer: {
    type: Boolean,
    required: true,
    default: false
  },
  uId: {
    type: String,
    required: true,
    unique: true
  },
  isCompany: {
    type: Boolean,
    required: true,
    default: false
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
