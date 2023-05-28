const Router = require("express").Router();
const employerController = require('../controllers/employer_controller');

// routes
Router.get("/getAllUsers", employerController.get_all_employers);

Router.get("/getUserById/", employerController.get_employer_by_uId);

Router.post("/createUserProfile/", employerController.create_employer_profile);

Router.put("/updateUser/", employerController.update_employer_profile);

module.exports = Router;
