const mongoose = require("mongoose");

const Contact = mongoose.Schema({
  email: String,
  phone: Number,
  query: String,
});

module.exports = mongoose.model("queries", Contact);
