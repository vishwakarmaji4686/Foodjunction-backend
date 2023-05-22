const express = require("express");
const app = express();
const productController = require("../../controller/admin/ProductController");

app.post("/", productController.createProduct);

app.get("/", productController.getAllProducts);

app.get("/:productId", productController.getsingleProducts);

app.delete("/:productId", productController.deleteproduct);

app.put("/:productId", productController.updateProduct);
module.exports = app;