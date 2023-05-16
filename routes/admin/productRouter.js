const express = require("express");
const app = express();
const productController = require("../../controller/admin/ProductController");

app.post("/", productController.createProduct);


module.exports = app;