const express = require("express");
const app = express();
const productRouter = require("./productRouter")

app.use("/product", productRouter);

module.exports = app;