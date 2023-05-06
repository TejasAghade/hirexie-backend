const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
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
  uId: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    enum: ['user', 'employer', 'company'],
    required: true,
    default: 'user'
  },
  registrationDate: {
    type: Date,
    required: true,
    default: Date.now
  }
},
);

const user = mongoose.model('users', authSchema);

module.exports = user;
