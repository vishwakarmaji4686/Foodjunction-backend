const { response } = require("../../routes/admin/productRouter");
const CategoryServic = require("../../services/admin/CategoryServic");
const CategoryValidation = require("../../validation/CategoryValidation");

class CategoryController {
    constructor() { }
    async createcategory(req, res) {
        let validation = CategoryValidation.createcategory(req, res)
        console.log("validation", validation);
        let response = {}
        if (validation && !validation.isValid) {
            response.message = validation;
            res.statusCode = 422;
        }
        await CategoryServic.createcategory(req, res);
        res.statusCode = 201;
        res.json({
            message: "category created"
        });
    };
    async getAllCategory(req, res){
        let category = await CategoryServic.getAllCategory(req, res)
        res.statusCode = 200;
        res.json(category)
    }
    async getSingleCategory(req, res){
        let category = CategoryServic.getSingleCategory(req, res)
        res.statusCode = 200;
        res.json(category)
    }
    async deleteCategory(req, res){
        await CategoryServic.deleteCategory(req, res)
        res.statusCode = 204;
        res.json(true)
    }
    async updateCategory(req, res){
        let validation = CategoryValidation.createcategory(req, res)
        console.log("validation", validation);
        let response = {}
        if (validation && !validation.isValid) {
            response.message = validation;
            res.statusCode = 422;
        }
        await CategoryServic.updateCategory(req, res);
        res.statusCode = 204;
        res.json(true);
    }
}
module.exports = new CategoryController();