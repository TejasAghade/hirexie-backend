const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  }
});

const employerSchema = new mongoose.Schema({
  employmentPosition: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  companyId: {
    type: String,
    required: true
  },
  uId: {
    type: String,
    required: true,
    unique: true
  },
  experience: {
    type: [experienceSchema],
    required: true
  }
});

const Employer = mongoose.model('Employer', employerSchema);

module.exports = Employer;
