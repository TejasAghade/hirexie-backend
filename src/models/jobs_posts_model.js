const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  jobId: {
    type: String,
    required: true,
    unique: true
  },
  jobPostedById: {
    type: String,
    required: true
  },
  companyId: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  jobTitle: {
    type: String,
    required: true
  },
  jobDescription: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  skillsRequired: {
    type: [String],
    required: true
  },
  applyUrl: {
    type: String,
    required: true
  },
  companyProfileUrl: {
    type: String,
    required: true
  },
  datePosted: {
    type: Date,
    required: true,
    default: Date.now
  },
  jobCategory: {
    type: String,
    required: true
  },
  requiredEducation: {
    type: String,
    required: true
  },
  applicationDeadline: {
    type: Date,
    required: true
  },
  isActiveApplication: {
    type: Boolean,
    required: true,
    default: true
  }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
