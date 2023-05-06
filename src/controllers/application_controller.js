const JobApplicationModel = require("../models/applications_model");
const { v4: uuidv4 } = require("uuid");

const get_all = async (req, res) => {
  try {
    applications = await JobApplicationModel.find();
    res.setHeader("Cache-Control", "no-cache");
    res.json(applications);

    console.log(applications);
  } catch (error) {
    res.json({ message: error });
  }
};

const get_by_uId = async (req, res) => {
  const companyId = req.body;
  try {
    applications = await JobApplicationModel.findById(companyId);
    res.setHeader("Cache-Control", "no-cache");
    res.json(applications);

    console.log(applications);
  } catch (error) {
    res.json({ message: error });
  }
};

// controller for to apply for job
const apply = async (req, res) => {
  const jobApplication = new JobApplicationModel(req.body);
  let applicationId = uuidv4();
  jobApplication.applicationId = applicationId;
  try {
    const appliedApplication = await jobApplication.save();
    res.status(201).json(appliedApplication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};



const update_application = async (req, res) => {
  const { applicationId } = req.params;
  // accepting values should be same like request body
  const { applicationStatus, isActive } = req.body;
  let updateFields = {};

  if (applicationStatus) {
    updateFields.applicationStatus = applicationStatus;
  }
  if (isActive) {
    updateFields.isActive = isActive;
  }

  console.log(applicationStatus);

  const updatedApplication = await JobApplicationModel.findOneAndUpdate(
    { applicationId },
    { $set: updateFields },
    { new: true }
  );

  if (!updatedApplication) {
    res.status(404).send("Application not found");
    return;
  }

  res.json(updatedApplication);
};

module.exports = {
  get_all,
  get_by_uId,
  apply,
  update_application,
};
