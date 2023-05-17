const express = require("express");
const app = express();
const productController = require("../../controller/admin/ProductController");

app.post("/", productController.createProduct);

app.get("/", productController.getAllProducts);

module.exports = app;