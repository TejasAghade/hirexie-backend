const authModel = require("../models/auth_model");
const { v4 : uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");



const bcrypt = require("bcrypt");

const login = async (req, res) => {
    try {
        const user = await authModel.findOne({
            email: req.body.email,
            password: req.body.password,
        })

        

        if (user) {
            console.log(user.email);
            const token = jwt.sign(
                {
                    uId: user.uId,
                    email: req.body.email,
                    username: user.userFirstName + " " + user.userLastName,
                    role: user.role,
                    registrationDate : user.registrationDate
                },
                "Hirable_user_Authentiction-key321"
            );

            return res.json({ status: "ok", user: token });
        } else {
            return res.json({ status: "error", user: false });
        }
    } catch (error) {
        console.log(error);
    }
};


const signup = async (req, res) => {

    const user = await authModel(req.body);
    const userUId = uuidv4()
    user.uId = userUId;

    

    try {

        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ status: "failed", message: err.message });
    }


}

module.exports = {
    login,
    signup
};
