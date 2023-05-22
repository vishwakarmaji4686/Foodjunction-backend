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

    async getsingleProduct(req, res){
        let productId = req.params.productId;
        let product = await ProductModel.getsingleProduct(productId);
        console.log("product", product); 
        return product;
    }

    async deleteproduct(req, res){
        let productId = req.params.productId;
        let product = await ProductModel.deleteproduct(productId);
        console.log("product", product); 
        return
    }

    async updateProduct(req, res){
        let productId = req.params.productId;
        const product = {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
            categoryId: req.body.categoryId,
        };
        await ProductModel.updateProduct(productId, product);
        return true;
    }
}
module.exports = new ProductServices();