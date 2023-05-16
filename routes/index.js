const express = require("express");
const app = express();
const adminRouter = require("./admin/adminRouter");

/** 
 * Include admin router
 */
app.use("/admin", adminRouter);


module.exports = app;