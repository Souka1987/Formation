/***
 *
 * Model de Countries
 *
 *************************/

// Import de mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CountriesSchema = new mongoose.Schema({
  country: String,
  region: String,
  population: String,
  createDate: {
    type: Date,
    default: new Date().toDateString(),
  },
});

// Pour récupérer les data de la base de données.
const Countries = mongoose.model("Countries", CountriesSchema);

// On exporte le le schéma
module.exports = Countries;