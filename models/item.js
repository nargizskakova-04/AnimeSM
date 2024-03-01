const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    names: {
      en: String,
      anotherLanguage: String,
    },
    descriptions: {
      en: String,
      anotherLanguage: String,
    },
    images: [String],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deletedAt: Date,
  });


const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
