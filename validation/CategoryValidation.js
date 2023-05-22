const joi = require("joi");
const { response } = require("../routes/admin/productRouter");
const CategoryModel = require("../model/admin/CategoryModel");
class CategoryValidation {
    constructor() { }
    async createcategory(req, res){
        let response = {
            isValid : true,
            message : null,
        }
        let category =  joi.object({
            title: joi.string().required(),
            description: joi.string().required()
        })
        let validateRes = category.validate(req.body)
        console.log("validateRes", validateRes);
        if(validateRes && validateRes.error && validateRes.error.details){
            response.isValid = false;
            response.message = validateRes.error.details[0].message
        };
        return response;
    }
}
module.exports = new CategoryValidation();