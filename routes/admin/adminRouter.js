const express = require("express");
const app = express();
const productRouter = require("./productRouter");
const userRouter = require("./userRouter");
const categoryRouter = require("./CategoryRouter");

app.use("/product", productRouter);
app.use("/user", userRouter);
app.use("/category", categoryRouter);

module.exports = app;