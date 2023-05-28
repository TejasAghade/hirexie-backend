const Router = require("express").Router();
const usersController = require('../controllers/users_controller');

// routes
Router.get("/getAllUsers", usersController.get_all_users);

Router.get("/getUserById/", usersController.get_user_by_uId);

Router.post("/createUserProfile/", usersController.create_user_profile);

Router.put("/updateUser/", usersController.update_user_profile);

module.exports = Router;
