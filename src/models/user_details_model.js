const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: true
  },
  institute: {
    type: String,
    required: true
  },
  percentage: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  }
});

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

const certificationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  issuer: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  }
});

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  }
});

const userDetailsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  uId: {
    type: String,
    required: true,
    unique: true
  },
  userUId: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  education: {
    type: [educationSchema],
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true
  },
  isWorking: {
    type: Boolean,
    required: true,
    default: false
  },
  experience: {
    type: [experienceSchema],
    required: true
  },
  certifications: {
    type: [certificationSchema],
    required: true
  },
  projects: {
    type: [projectSchema],
    required: true
  },
  resumeLink: {
    type: String,
    required: true
  }
});

const UserDetails = mongoose.model('UserDetails', userDetailsSchema);

module.exports = UserDetails;
