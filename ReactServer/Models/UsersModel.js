const mongoose = require("mongoose");

let userSchema = mongoose.Schema;

let user = new userSchema({
    fullName : String,
    userName : String,
    password: String
});
module.exports = mongoose.model("users",user);