const { connection } = require("../../Config/MySql");

class CategoryModel{
    constructor(){}

    createcategory(data) {
        return new Promise((resolve, reject) => {
            let adduser = `INSERT INTO category (title, description) VALUES ('${data.title}','${data.description}')`;
            connection.query(adduser, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(true)
                }
            });
        });
    };
    getAllCategory(){
        return new Promise((resolve, reject) => {
            let adduser = `SELECT * FROM category`
            connection.query(adduser, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            });
        });
    };
    getSingleCategory(id){
        return new Promise((resolve, reject) => {
            let adduser = `SELECT * FROM category WHERE id='${id}'`
            connection.query(adduser, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    let category = {}
                    if(result && result.length > 0){
                        category = result[0]
                    }
                    resolve(category)
                }
            });
        });
    }
    deleteCategory(id){
        return new Promise((resolve, reject) => {
            let adduser = `DELETE FROM category WHERE id='${id}'`
            connection.query(adduser, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(true);
                }
            });
        });
    }
    updateCategory(id, category){
        return new Promise((resolve, reject) => {
            const update = `UPDATE category SET title='${category.title}', description='${category.description}'  WHERE id ='${id}'`
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
module.exports = new CategoryModel();