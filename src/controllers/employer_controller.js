const employerDetailsModel = require("../models/employer_model");
const { v4: uuidv4 } = require("uuid");

const get_all_employers = async (req, res) => {
    try {
        employer = await employerDetailsModel.find();
        res.setHeader("Cache-Control", "no-cache");
        res.json(employer);

    } catch (error) {
        res.status(500).json({ status: "error" });
    }
};

const get_employer_by_uId = async (req, res) => {
    const uId = req.query.uId;
    try {
        employer = await employerDetailsModel.findById(uId);
        res.setHeader("Cache-Control", "no-cache");
        res.json(employer);

    } catch (error) {
        res.status(500).json({ message: error });
    }
};


const create_employer_profile = async (req, res) => {
    const employer = new employerDetailsModel(req.body);
    let uId = uuidv4();
    employer.uId = uId;

    if(checkUserExist({uId : req.body.userId})){

        try {
            const savedEmployet = await employer.save();
            res.status(201).json(savedEmployet);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }

    }
    
    
};



const update_employer_profile = async (req, res) => {
    const uId = req.query.uId;

    const employer = req.body;

    try {
        const result = await employerDetailsModel.updateOne({ uId }, employer);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    get_all_employers,
    get_employer_by_uId,
    create_employer_profile,
    update_employer_profile,
};
