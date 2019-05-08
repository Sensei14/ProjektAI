const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  description: String,
  type: String,
  price: Number,
  portioning: String,
  Ingredients: String,
  image: String
});

module.exports = mongoose.model("Products", productSchema);
