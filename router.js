/*
 * Import des modules
 *
 * ******************* */

const express = require("express");
const router = express.Router();

// Controllers
const NewsController = require("./controllers/NewsController");

/*
 * Routes
 * ****** */

// Route News

// Exemple de liens avec params avec le "?" + le "q" =>  https://search.brave.com/search?q=google&source=desktop
router
  // Récupérer tous les articles
  // http://localhost:5000/
  // .get("/", NewsController.getAll)
  /** */
  //   Récupérer un article unique
  // http://localhost:5000/news
  // .get("/:id", NewsController.getId)
  /** */
  //   Créer un nouvel article
  // http://localhost:5000/
  .post("/", NewsController.create)
  /** */
  //   Editer/Modifier
  // http://localhost:5000/news/619cfacdcfab3190127a9020
  // .put("/news/:id", NewsController.editOne)
  /** */
  // Supprimer TOUS les articles
  // http://localhost:5000/
  // .delete("/", NewsController.deleteMany)
  /** */
  // Supprimer un article
  // http://localhost:5000/news/619cfacdcfab3190127a9020
  // .delete("/news/:id", NewsController.deleteOne);

// On export le router
module.exports = router;
