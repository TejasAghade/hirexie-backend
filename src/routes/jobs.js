const router = require("express").Router();
const jobsController = require('../controllers/jobs_controller');

// routes
router.get("/getAll", jobsController.get_all_jobs);

router.get("/getJobByUid/", jobsController.get_job_by_uId);

router.post("/createJob/", jobsController.create_job);

router.put("/updateJob/", jobsController.update_job);

module.exports = router;
