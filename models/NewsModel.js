/***
 *
 * Model de News
 *
 *************************/

// Import de mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Article = require("./ArticleModel");

const NewsSchema = new mongoose.Schema({
  title: String,
  content: String,
  createDate: {
    type: Date,
    default: new Date(),
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Article",
  },
});

// Pour récupérer les data de la base de données.
const News = mongoose.model("News", NewsSchema);

// On exporte le le schéma
module.exports = News;
