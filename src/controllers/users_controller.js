const userDetailsModel = require("../models/user_details_model");
const { v4: uuidv4 } = require("uuid");

const get_all_users = async (req, res) => {
    try {
        users = await userDetailsModel.find();
        res.setHeader("Cache-Control", "no-cache");
        res.json(users);

    } catch (error) {
        res.status(500).json({ status: "error" });
    }
};

const get_user_by_uId = async (req, res) => {
    const uId = req.query.uId;
    try {
        users = await userDetailsModel.findById(uId);
        res.setHeader("Cache-Control", "no-cache");
        res.json(users);

    } catch (error) {
        res.status(500).json({ message: error });
    }
};


const create_user_profile = async (req, res) => {
    const users = new userDetailsModel(req.body);
    let uId = uuidv4();
    users.uId = uId;

    if(checkUserExist({uId : req.body.userId})){

        try {
            const addedUser = await users.save();
            res.status(201).json(addedUser);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }

    }
    
    
};



const update_user_profile = async (req, res) => {
    const uId = req.query.uId;

    const user = req.body;

    try {
        const result = await userDetailsModel.updateOne({ uId }, user);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    get_all_users,
    get_user_by_uId,
    create_user_profile,
    update_user_profile,
};
