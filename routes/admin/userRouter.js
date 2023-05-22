const express = require("express");
const app = express();
const userController = require("../../controller/admin/UserController")

app.post("/", userController.createUser )
app.get("/", userController.getAllUser)
app.get("/:userId", userController.getSingleUser)
app.delete("/:userId", userController.deleteUser)
app.put("/:userId", userController.updateUser)
module.exports = app;