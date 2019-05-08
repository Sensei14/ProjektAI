const mongoose = require("mongoose");
const Shema = mongoose.Schema;

const userSchema = new Schema({
  login: {
    username: String,
    password: String,
    email: String
  },
  adress: {
    city: String,
    street: String
  },
  userData: {
    name: String,
    lastname: String,
    registered: { type: Date, default: Date.now }
  }
});

module.exports = mongoose.model("Users", userSchema);
