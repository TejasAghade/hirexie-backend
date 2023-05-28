const ApplicationsRouter = require("express").Router();
const applicationController = require('../controllers/application_controller');

// routes
ApplicationsRouter.get("/getAll", applicationController.get_all);

ApplicationsRouter.get("/getApplicationsByUid/", applicationController.get_by_uId);

ApplicationsRouter.post("/apply/", applicationController.apply);

ApplicationsRouter.patch("/changeStatus/", applicationController.update_application);

module.exports = ApplicationsRouter;
