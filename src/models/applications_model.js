const mongoose = require("mongoose");

const jobApplicationSchema = new mongoose.Schema({
  uId: {
    type: String,
    required: true,
    unique: true,
  },
  applicationDate: {
    type: Date,
    default: Date.now,
  },
  companyId: {
    type: String,
    required: true,
  },
  appliedCompanyName: {
    type: String,
    required: true,
  },
  applicationStatus: {
    type: String,
    enum: [
      "Submitted",
      "Under Review",
      "Interview Scheduled",
      "Rejected",
      "Offered",
      "Accepted",
    ],
    default: "Submitted",
  },
  appliedFor: {
    jobId: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    jobDesc: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    jobCategory: {
      type: String,
      required: true,
    },
  },
  userDetails: {
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    education: {
      type: [
        {
          degree: {
            type: String,
            required: true,
          },
          institute: {
            type: String,
            required: true,
          },
          percentage: {
            type: String,
            required: true,
          },
          yyearear: {
            type: String,
            required: true,
          },
        },
      ],
      required: true,
    },

    experience: {
      type: [
        {
          companyName: {
            type: String,
            required: false,
          },
          position: {
            type: String,
            required: false,
          },
          joiningDate: {
            type: Date,
            required: false,
          },
          endDate: {
            type: Date,
            required: false,
          },
        },
      ],
      required: false,
    },
    resume: {
      type: String,
      required: true,
    },
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});

JobApplicationModel = mongoose.model("job_applications", jobApplicationSchema);

module.exports = JobApplicationModel;
