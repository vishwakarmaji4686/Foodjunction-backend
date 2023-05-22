const UserModel = require("../../model/admin/UserModel");
class userService {
    constructor() { }
    async createUser(req, res){
        let user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            contact: req.body.contact,
            password: req.body.password,
        }
        await UserModel.createUser(user)


    }
    async getAllUser(req, res){
        let user = await UserModel.getAllUser();
        console.log("users", user);
        return user;
    }
    async getSingleUser(req, res){
        let userId = req.params.userId
        let user =  await UserModel.getSingleUser(userId)
        console.log("userId", user);
        return user;
    }
    async deleteUser(req, res){
        let userId = req.params.userId
        await UserModel.deleteUser(userId)
        return true;
    }
    async updateUser(req, res){
        let id = req.params.userId;
        let user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            contact: req.body.contact,
            password: req.body.password,
        }
        await UserModel.updateUser(id, user)
        return true;
    }
}
module.exports = new userService();