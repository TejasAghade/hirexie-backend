const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  companyUid: {
    type: String,
    required: true,
    unique: true
  },
  companyLocation: {
    type: String,
    required: true
  },
  workingEmployees: {
    type: Number,
    default: 0
  },
  industryType: {
    type: String,
    required: true
  }
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
