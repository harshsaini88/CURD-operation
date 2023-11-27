const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  author: String,
  description: String,
  price: String,
  available: Boolean,
  image: String 
});

const Item = mongoose.model('item', itemSchema);

module.exports = Item;
