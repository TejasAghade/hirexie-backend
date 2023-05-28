const multer = require('multer');
const path = require('path');

const documentModel = require("../models/documents_model");

const uploadpath = "../../uploads";

let fileName;

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        fileName = file.originalname;
        cb(null, file.originalname);
    }
});


const upload = multer({
    storage: storage
}).single('file');


const uploadDocument = async (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
        } else {
            newDocument = new documentModel(req.body);
            newDocument.file = req.file.filename;
            newDocument.save().then(() => res.json({ fileUrl: fileName }));
        }
    })
}


const getFile = async (req, res) => {

    const uId = req.query.uId;

    try {
        doc = await documentModel.findOne({ uId: uId });
        res.setHeader("Cache-Control", "no-cache");
        
        fileName = doc.file

        const filePath = path.join(__dirname, '../../uploads', fileName);

        res.download(filePath, (err) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: 'Error downloading file.' });
            }
        });

        

    } catch (error) {
        res.status(500).json({ message: error });
    }

}



module.exports = { uploadDocument, getFile };