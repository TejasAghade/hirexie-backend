const router = require("express").Router();
const authController = require('../controllers/auth_controller');



// routes
router.post("/login", authController.login);

router.post("/register", authController.signup);

module.exports = router;
