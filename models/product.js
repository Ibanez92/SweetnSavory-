const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cupcakeSchema = new mongoose.Schema({
      imagePath: {type: String, required: true},
      title: {type: String, required: true},
      description: {type: String, required: true},
      price: {type: String, required: true}
});

const Product = mongoose.model('Product', cupcakeSchema);

module.exports = Product;