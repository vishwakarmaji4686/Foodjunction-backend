require("dotenv").config();
const express = require("express");
const app = express();
const mainRouter = require("./routes/index");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', mainRouter);

/** 
 * Initialize server with mention port
 */
const port = process.env.PORT;
app.listen(port, function () {
    console.log(`Server started at PORT : ${port}`);
});