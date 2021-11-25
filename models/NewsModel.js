/***
 *
 * Model de News
 *
 *************************/

// Import de mongoose
const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const NewsSchema = new mongoose.Schema({

  title: String,
  author: String,
  content: String,
  createDate: {
    type: Date,
    default: Date.now(),
  },
});

// Pour récupérer les data de la base de données.
const News = mongoose.model("News", NewsSchema);

// On exporte le le schéma
module.exports = News;
