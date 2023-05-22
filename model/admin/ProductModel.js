const { connection } = require("../../Config/MySql");
class ProductModel {

    constructor() { }

    async insertProduct(product) {
        return new Promise((resolve, reject) => {
            const insertQry = `INSERT INTO products(title, description, price, quantity, category_id) VALUES('${product.title}', '${product.description}', '${product.price}', '${product.quantity}', '${product.categoryId}')`;
            connection.query(insertQry, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(true);
                }
            });
        });
    }
    
    async getAllProducts() {
        return new Promise((resolve, reject) => {
            const getProductQry = `SELECT * FROM products`;
            connection.query(getProductQry, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }
    getsingleProduct(productId){
        return new Promise((resolve, reject) => {
            const getProducts = `SELECT * FROM products WHERE id='${productId}'`;
            connection.query(getProducts, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    let product = {}
                    if(result && result.lenght > 0){
                        product = result[0]
                    }
                    resolve(result);
                }
            });
        });
    }
    deleteproduct(productId){
        return new Promise((resolve, reject) => {
            const getProducts = `DELETE  FROM products WHERE id='${productId}'`;
            connection.query(getProducts, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(true);
                }
            });
        });
    }
    updateProduct(id, product){
        return new Promise((resolve, reject) => {
            const update = `UPDATE products SET title='${product.title}', description='${product.description}', price='${product.price}', quantity='${product.quantity}', category_id='${product.categoryId}'  WHERE id ='${id}'`
            connection.query(update, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(true);
                }
            });
        });
    }
}
module.exports = new ProductModel();