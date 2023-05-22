const express = require("express");
const UserModel = require("../../model/admin/UserModel");
const app = express();
const jwt = require("jsonwebtoken");


app.post("/login", async function (req, res) {
    try {
        let response = {};
        const username = req.body.username;
        const password = req.body.password;
        const user = await UserModel.getUserByEmailId(username);
        console.log("user", user);
        if (user) {
            if (user.password == password) {
                const token = jwt.sign({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    contact: user.contact,
                    userId: user.id,
                }, "food-Store-1234-4567-1345-67yh-uh89");
                console.log("token", token);
                res.statusCode = 200;
                response.token = token;
            } else {
                req.statusCode = 400;
                response.message = "Incorrect Password";
            }
        } else {
            req.statusCode = 400;
            response.message = "Invalid Email Address";
        }
        res.json(response);
    } catch (error) {

    }
});

module.exports = app;