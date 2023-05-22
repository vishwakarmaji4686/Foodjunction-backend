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
module.exports.connection = connection;