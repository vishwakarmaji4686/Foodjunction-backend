const CategoryModel = require("../../model/admin/CategoryModel");

class CategoryServic {
    constructor() { }
    async createcategory(req, res) {
        let category = {
            title: req.body.title,
            description: req.body.description
        }
        await CategoryModel.createcategory(category);
        return true;
    };
    async getAllCategory(req, res){
        let category = await CategoryModel.getAllCategory();
        console.log("category", category);
        return(category);
    }
    async getSingleCategory(req, res){
        let categoryId = req.params.categoryId;
        let category = await CategoryModel.getSingleCategory(categoryId)
        console.log("categoryId", category);
        return category;
    }
    async deleteCategory(req, res){
        let categoryId = req.params.categoryId;
        await CategoryModel.deleteCategory(categoryId)
        return true;
    }
    async updateCategory(req, res){
        let Id = req.params.categoryId;
        let category = {
            title: req.body.title,
            description: req.body.description
        }
        await CategoryModel.updateCategory(Id, category)
        return true;

    }
}
module.exports = new CategoryServic();