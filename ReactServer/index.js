const express = require('express')
const app = express();
const moviesController = require("./Controller/MovieController")
const usersController = require("./Controller/UsersController")
const membersController = require("./Controller/MembersController")
const SubscriptionsController = require("./Controller/SubscriptionsController")
require('./DataBase/dbConnection')

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());
var cors = require('cors');
app.use(cors());

app.use("/api/Users",usersController);
app.use("/api/Movies",moviesController);
app.use("/api/Members",membersController);
app.use("/api/Subs",SubscriptionsController);
app.listen(5000)

console.log("serverRUns")