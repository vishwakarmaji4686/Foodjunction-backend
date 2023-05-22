const express = require("express");
const app = express();
const CategoryController = require("../../controller/admin/CategoryController")

app.post("/", CategoryController.createcategory)
app.get("/", CategoryController.getAllCategory)
app.get("/:categoryId", CategoryController.getSingleCategory);
app.delete("/:categoryId", CategoryController.deleteCategory);
app.put("/:categoryId", CategoryController.updateCategory);

module.exports = app;