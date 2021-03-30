const mongoose = require("mongoose");

let moviesSchema = mongoose.Schema;

let movie = new moviesSchema({
    name: String,
    genres :Array,
    premieredYear : String,
    imageUrl : String
   
});
module.exports = mongoose.model("movies",movie);


