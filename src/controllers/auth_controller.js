const authModel = require("../models/auth_model");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");

const cors = require("cors");
const express = require("express");
const app = express();


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
                    registrationDate: user.registrationDate
                },
                "Hirable_user_Authentiction-key321"
            );

            return res.status(200).json({ status: "ok", user: true, token: token });
        } else {
            return res.status(404).json({ status: "error", user: false });
        }
    } catch (error) {
        console.log(error);
    }
};

async function checkUserExist({ email, uId }) {

    try {

        let user;

        if (email) {
            user = await authModel.findOne({
                email: email
            })
        }
        else if (uId) {
            user = await authModel.findOne({
                uId: uId
            })
        }

        if (user) {
            return true;
        } else {
            return false;
        }

    } catch (error) {
        console.log(error);
    }
};


const signup = async (req, res) => {



    if (!checkUserExist({ email: req.body.email})) {
        const user = await authModel(req.body);
        const userUId = uuidv4()
        user.uId = userUId;

        try {

            await user.save();
            res.status(201).json(user);
        } catch (err) {
            res.status(500).json({ status: "failed", message: err.message });
        }
    }else{
        res.status(409).json({status: "user already exist"})
    }

    


}

module.exports = {
    login,
    signup,
    checkUserExist
};
