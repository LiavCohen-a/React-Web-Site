const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/reactDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify : false
});
