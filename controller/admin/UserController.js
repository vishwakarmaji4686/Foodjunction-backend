const userService = require("../../services/admin/userService")
const uservalidation = require("../../validation/UserValidation")
class UserController {
    constructor() { }
    async createUser(req, res) {
        try {
            let validation = uservalidation.createUservalidat(req, res)
            console.log("validation", validation);
            let response = {};
            if (validation && !validation.isValid) {
                response.message = validation,
                    response.statusCode = 422;
                req.json(response);
                return;
            }
            await userService.createUser(req, res);
            res.statusCode = 201;
            res.json({
                message: "User Created"
            })
        } catch (error) {
            console.log("createuser error", error);
        }
    }
    async getAllUser(req, res) {
        let user = await userService.getAllUser(req, res);
        req.statusCode = 200;
        res.json(user)
    }
    async getSingleUser(req, res) {
        let user = await userService.getSingleUser(req, res);
        req.statusCode = 200;
        res.json(user)
    }
    async deleteUser(req, res) {
        await userService.deleteUser(req, res);
        req.statusCode = 204;
        res.json(true)
    }
    async updateUser(req, res){
        let validation = uservalidation.createUservalidat(req, res)
        console.log("validation", validation);
        let response = {};
        if (validation && !validation.isValid) {
            response.message = validation,
                response.statusCode = 422;
            req.json(response);
            return;
        }
        await userService.updateUser(req, res);
        res.statusCode = 201;
        res.json({
            message: "User update"
        })
    }

}
module.exports = new UserController();