const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
  name: String,
  isVerified: Boolean,
  phone: String,
  email: String,
  salary: Number,
});

const Person = mongoose.model("person", personSchema);

module.exports = Person;
