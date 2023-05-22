const AdminValidation = require("../../validation/AdminValidation");
const ProductServices = require("../../services/admin/ProductServices");
const httpConstants = require("../../helpers/constants/httpConstants");

class ProductController {

    constructor() { }

    async createProduct(req, res) {
        try {
            const validate = AdminValidation.validateCreateProductBodyParams(req.body);
            console.log("validate", validate);
            const response = {};
            if (validate && !validate.isValid) {
                response.message = validate;
                res.statusCode = 422;
                res.json(response);
                return;
            }
            await ProductServices.createProduct(req, res);
            res.statusCode = 201;
            res.json({
                message: "Product created"
            });
        } catch (error) {
            console.log("Controller : createProduct :: error", error);
        }
    }

    async getAllProducts(req, res) {
        try {
            const data = await ProductServices.getAllProducts(req, res);
            res.statusCode = httpConstants.HTTP_SUCCESS;
            res.json(data);
        } catch (error) {
            console.log("Controller : getAllProducts :: error", error);
        }
    }
    async getsingleProducts(req, res) {
        try {
            let data = await ProductServices.getsingleProduct(req, res)
            res.statusCode = httpConstants.HTTP_SUCCESS;
            res.json(data);
        } catch (error) {
            console.log("Controller : getsingleProduct :: error", error);
        }
    }
    async deleteproduct(req, res){
         await ProductServices.deleteproduct(req, res);
        res.statusCode = 204;
        res.json(true);
    }
    async updateProduct(req, res){
        try {
            const validate = AdminValidation.validateCreateProductBodyParams(req.body);
            console.log("validate", validate);
            const response = {};
            if (validate && !validate.isValid) {
                response.message = validate;
                res.statusCode = 422;
                res.json(response);
                return;
            }
            await ProductServices.updateProduct(req, res);
            res.statusCode = 204;
            res.json(true);
        } catch (error) {
            console.log("update Product::::::::::::::::", error);
        }
    }

}
module.exports = new ProductController();