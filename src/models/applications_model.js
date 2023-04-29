const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
  applicationId: {
    type: String,
    required: true,
    unique: true
  },
  applicationDate: {
    type: Date,
    default: Date.now
  },
  resume: {
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
  applicationStatus: {
    type: String,
    enum: ['Submitted', 'Under Review', 'Interview Scheduled', 'Rejected', 'Offered', 'Accepted'],
    default: 'Submitted'
  },
  appliedFor: {
    jobId: {
      type: String,
      required: true
    },
    jobTitle: {
      type: String,
      required: true
    },
    jobDesc: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    jobCategory: {
      type: String,
      required: true
    }
  },
  userDetails: {
    userId: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    },
    skills: {
      type: [String],
      required: true
    },
    education: {
      type: [{
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
          type: String,
          required: true
        }
      }],
      required: true
    }
  }
});

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

module.exports = JobApplication;