const jobsModel = require("../models/jobs_posts_model");
const { v4: uuidv4 } = require("uuid");

const get_all_jobs = async (req, res) => {
    try {
        jobs = await jobsModel.find();
        res.setHeader("Cache-Control", "no-cache");
        res.json(jobs);

    } catch (error) {
        res.status(500).json({ status: error });
    }
};

const get_job_by_uId = async (req, res) => {
    const uId = req.query.uId;
    try {
        jobs = await jobsModel.findById(uId);
        res.setHeader("Cache-Control", "no-cache");
        res.json(jobs);

    } catch (error) {
        res.status(500).json({ message: error });
    }
};


const create_job = async (req, res) => {
    const jobs = new jobsModel(req.body);
    let uId = uuidv4();
    jobs.uId = uId;

    if(checkUserExist({uId : req.body.userId})){

        try {
            const addedJob = await jobs.save();
            res.status(201).json(addedJob);
        } catch (err) {
            res.status(500).json({ message: err });
        }

    }
    
    
};



const update_job = async (req, res) => {
    const uId = req.query.uId;

    const user = req.body;

    try {
        const result = await jobsModel.updateOne({ uId }, user);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    get_all_jobs,
    get_job_by_uId,
    create_job,
    update_job,
};
