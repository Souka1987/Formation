/*
 * Import des modules
 *
 * ******************* */

const express = require("express");
const router = express.Router();

// Controllers
const NewsController = require("./controllers/NewsController");
const CountriesController = require("./controllers/CountriesController");

/*
 * Routes
 * ****** */

router

  /***
   *
   * News
   *
   */

  // Récupérer tous les articles
  .get("/", NewsController.getAll)
  //   Récupérer un article unique ID (chemin spécifié)
  .get("/news", NewsController.getId)
  //   Créer un nouvel article
  .post("/news", NewsController.create)
  //   Editer/Modifier
  .put("/news/:id", NewsController.editOne)
  // Supprimer un article unique
  .delete("/news/:id", NewsController.deleteOne)
  // Supprimer TOUS les articles
  .delete("/", NewsController.deleteMany)

  // test router.route
  // router.route('/article')
  //   .get()
  //   .post()
  //   .put()
  //   .delete()

  /***
   *
   * Countries
   *
   */

  // Récupérer tous les articles
  .get("/", CountriesController.getAll)
  //   Récupérer un article unique ID (chemin spécifié)
  .get("/countries", CountriesController.getId)
  //   Créer un nouvel article
  .post("/countries", CountriesController.create)
  //   Editer/Modifier
  .put("/countries/:id", CountriesController.editOne)
  // Supprimer un article unique
  .delete("/countries/:id", CountriesController.deleteOne)
  // Supprimer TOUS les articles
  .delete("/", CountriesController.deleteMany);

// On export le router
module.exports = router;
