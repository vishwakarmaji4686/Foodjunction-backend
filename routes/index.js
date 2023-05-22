const express = require("express");
const app = express();
const adminRouter = require("./admin/adminRouter");
const userRouter = require("./user/authRouter");

/** 
 * Include admin router
 */
app.use("/admin", adminRouter);

app.use("/", userRouter);


module.exports = app;