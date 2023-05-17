const ProductModel = require("../../model/ProductModel");

class ProductServices {
    constructor() { }

    async createProduct(req, res) {
        const product = {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
            categoryId: req.body.categoryId,
        };
        await ProductModel.insertProduct(product);
        return true;
    }
    
    async getAllProducts(req, res) {
        const data = await ProductModel.getAllProducts();
        return data;
    }
}
module.exports = new ProductServices();