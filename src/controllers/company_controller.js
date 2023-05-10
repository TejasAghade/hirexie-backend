const companyModel = require("../models/company_model");
const { v4: uuidv4 } = require("uuid");

const get_all = async (req, res) => {
    try {
        companies = await companyModel.find();
        res.setHeader("Cache-Control", "no-cache");
        res.json(companies);

        console.log(companies);
    } catch (error) {
        res.status(500).json({ status: "error" });
    }
};

const get_by_uId = async (req, res) => {
    const uId = req.query.uId;
    try {
        company = await companyModel.findById(uId);
        res.setHeader("Cache-Control", "no-cache");
        res.json(company);

        console.log(company);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

// controller for to apply for job
const create_profile = async (req, res) => {
    const company = new companyModel(req.body);
    let uId = uuidv4();
    company.uId = uId;
    try {
        const addedCompany = await company.save();
        res.status(201).json(addedCompany);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



const update_profile = async (req, res) => {
    const uId = req.query.uId;

    const company = req.body;

    try {
        const result = await companyModel.updateOne({ uId }, company);
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    get_all,
    get_by_uId,
    create_profile,
    update_profile,
};
