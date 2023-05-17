const mysql = require("mysql");

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

connection.connect(function (error) {
    if (error) {
        console.log("Unable to connect with database");
    } else {
        console.log("Database Connected");
    }
});

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

}
module.exports = new ProductModel();