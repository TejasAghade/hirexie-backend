const Router = require("express").Router();
const companyController = require('../controllers/company_controller');

// routes
Router.get("/getAllCompanies", companyController.get_all);

Router.get("/getCompanyById/", companyController.get_by_uId);

Router.post("/createProfile/", companyController.create_profile);

Router.put("/updateCompany/", companyController.update_profile);

module.exports = Router;
