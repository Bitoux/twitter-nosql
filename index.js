const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const routes = require("./routes/routes.js");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TodoListDB');


routes(app);

const server = app.listen(3000, function () {
    console.log("app running on port. ->", server.address().port);
});