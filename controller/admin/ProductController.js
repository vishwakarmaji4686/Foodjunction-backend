const AdminValidation = require("../../validation/AdminValidation");

class ProductController {

    constructor() { }

    async createProduct(req, res) {
        try {
            const validate = AdminValidation.validateCreateProductBodyParams(req.body);
            console.log("validate", validate);
            const response = {};
            if(validate && !validate.isValid){
                response.message = validate;
                res.statusCode = 422;
                res.json(response);
                return;
            }
            
        } catch (error) {
            console.log("Controller : createProduct :: error", error);
        }
    }

}
module.exports = new ProductController();