const mongoose = require("mongoose");

let subscriptionsSchema = mongoose.Schema;

let subscriptions = new subscriptionsSchema({
    movieID : String,
    memberID : String,
    date : String

});

module.exports = mongoose.model("subscriptions",subscriptions);