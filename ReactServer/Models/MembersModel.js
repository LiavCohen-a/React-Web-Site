const mongoose = require("mongoose");

let membersSchema = mongoose.Schema;

let member = new membersSchema({
    name : String,
    email : String,
    City : String,
});
module.exports = mongoose.model("members",member);