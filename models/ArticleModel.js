/*
 *
 * Model de Article
 ******************************/

// Import de Mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const News = require("./NewsModel");

const ArticleSchema = new mongoose.Schema({
  // Première variable (basique)

  title: String,
  content: String,
  createDate: {
    type: Date,
    default: new Date(),
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "News",
  },
});
// Pour récupérer les data de la base de données.
const Article = mongoose.model("Article", ArticleSchema);

// On exporte le le schéma
module.exports = Article;
