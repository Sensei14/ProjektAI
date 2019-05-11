const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  login: {
    username: String,
    password: String
  },
  adress: {
    city: String,
    street: String
  },
  userData: {
    name: String,
    lastname: String,
    email: String,
    registered: { type: Date, default: Date.now }
  }
});

module.exports = mongoose.model("Users", usersSchema);
