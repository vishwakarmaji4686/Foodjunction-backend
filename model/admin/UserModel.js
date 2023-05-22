const { connection } = require("../../Config/MySql")
class UserModel {
    constructor() { }
    createUser(user) {
        return new Promise((resolve, reject) => {
            let adduser = `INSERT INTO users (firstName, lastName, email, contact, password) VALUES ('${user.firstName}','${user.lastName}','${user.email}','${user.contact}','${user.password}')`;
            connection.query(adduser, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(true)
                }
            });
        });
    }
    getAllUser() {
        return new Promise((resolve, reject) => {
            let adduser = `SELECT * FROM users`
            connection.query(adduser, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            });
        });
    }
    getSingleUser(userId) {
        return new Promise((resolve, reject) => {
            let adduser = `SELECT * FROM users WHERE id='${userId}'`
            connection.query(adduser, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    let user = {}
                    if (result && result.length > 0) {
                        user = result[0];
                    }
                    resolve(user);
                }
            });
        });
    }
    deleteUser(userId) {
        return new Promise((resolve, reject) => {
            let adduser = `DELETE FROM users WHERE id='${userId}'`
            connection.query(adduser, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(true);
                }
            });
        });
    }
    updateUser(id, user){
        return new Promise((resolve, reject) => {
            let update = ` UPDATE users SET firstName='${user.firstName}',lastName='${user.lastName}',email='${user.email}',contact='${user.contact}'  WHERE id='${id}'`
            connection.query(update, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(true);
                }
            });
        });
    }

}
module.exports = new UserModel();