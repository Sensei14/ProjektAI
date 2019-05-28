const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  items: [],
  amount: Number
});

module.exports = mongoose.model("Cart", cartSchema);
