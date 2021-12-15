/*
 * Countries Controller
 *
 * ****************** */

// Import du model
const Countries = require("../models/CountriesModel");

// GET ALL
exports.getAll = async (req, res) => {
  const dbCountries = await Countries.find();
  console.log("getAll", req.params, req.query);
  res.json({
    message: "Salutations !!!!",
    dbCountries,
  });
};

/***********/

// GET ID
exports.getId = async (req, res) => {
  // Nouvel article créé
  const countriesID = await Countries.findById(req.params.id);
  res.json({
    message: "Country ID créé",
    countriesID,
  });
};

/***********/

// CREATE
exports.create = (req, res) => {
    const b = req.body;
    console.log("req.body", b);
    if (b.country && b.region) {
      // On définit la construction de notre article
      const countries = new Countries({
        ...req.body,
        // title: b.title,
        // content: b.content,
      });
  
      // Et on sauvegarde nos modifications
      countries.save((err) => {
        if (err) return handleError(err);
      });
  
      res.json({
        message: "Item creé avec success !",
        data: countries,
      });
      // Sinon afficher l'erreur
    } else
      res.json({
        message: "Error, l'item n'a pas été créé !",
      });
  };

  /***********/

// PUT
exports.editOne = (req, res) => {
    console.log("put", req.query, req.body);
    // Chercher l'article par son Id pour l'éditer
    Countries.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      (err, data) => {
        if (err) throw err;
        res.json({
          message: "Article créé avec succès !",
        });
      }
    );
  };

  /***********/

// DELETE ONE
exports.deleteOne = async (req, res) => {
    console.log("delete", req.query, req.params.id);
    const CountriesId = await Countries.findById(req.params.id);
    console.log("CountriesId DeleteOne", CountriesId);
  
    Countries.findByIdAndDelete(req.params.id, (err, data) => {
      if (err) throw err;
      res.json({
        message: "l'Item à été supprimer avec success !",
      });
    });
  };

/***********/

// DELETE ALL
exports.deleteMany = function (req, res, next) {
    Countries.remove({}, function (err) {
      if (err) {
        console.log(err);
      } else {
        res.end("Tous a été éffacé !");
      }
    });
  };