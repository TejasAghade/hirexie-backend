// const router = require("express").Router();
// const fileUpload = require('../controllers/documents_controller');



// // routes
// // router.post("/uploadFile", fileUpload.uploadDocument);
// router.post('/uploadFile', fileUpload.uploadDocument);

// // router.get("/getFile", fileUpload.signup);

// module.exports = router;


const Router = require("express").Router();
const fileUpload = require('../controllers/documents_controller');


Router.post('/uploadFile', fileUpload.uploadDocument);
Router.get('/getFile/', fileUpload.getFile);


module.exports = Router;
