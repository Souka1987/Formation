/*
 * News Controller
 *
 * ****************** */

// Import du model
const News = require("../models/NewsModel");

// GET ALL
exports.getAll = async (req, res) => {
  const dbNews = await News.find();
  console.log("getAll", req.params, req.query);
  res.json({
    message: "Salutations !!!!",
    dbNews,
  });
};

/***********/

// GET ID
exports.getId = async (req, res) => {
  // Nouvel article créé
  const newsID = await News.findById(req.params.id);
  res.json({
    message: "Article ID créé",
    newsID,
  });
};

/***********/

// CREATE
exports.create = async (req, res) => {
  const b = req.body;
  console.log("req.body", b);
  if (b.title && b.author && b.content) {
    // On définit la construction de notre article
    const news = new News({
      ...req.body,
      // title: b.title,
      // content: b.content,
    });

    // Et on sauvegarde nos modifications
    news.save((err) => {
      if (err) return handleError(err);
    });

    await News.find();

    res.json({
      message: "Article creé avec success !",
      data: news,
    });
    // Sinon afficher l'erreur
  } else
    res.json({
      message: "Erreur, l'article n'a pas été créé !",
    });
};

/***********/

// PUT
exports.editOne = (req, res) => {
  console.log("put", req.params, req.body);
  // Chercher l'article par son Id pour l'éditer
  News.findByIdAndUpdate(
    req.params.id,
    {
      ...req.body,
    },
    (err, data) => {
      if (err) throw err;
      res.json({
        message: "Article MODIFIE avec succès !",
      });
    }
  );
};

/***********/

// DELETE ONE
exports.deleteOne = async (req, res) => {
  console.log("deleteOne", req.query, req.params.id);
  // Recupération des données sélectionnées dans la DB
  const NewsId = await News.findById(req.params.id);

  // Suppression de l'id de la DB
  await News.findByIdAndDelete(NewsId);

  // Recupération des données dans la DB
  const dbNews = await News.find();

  // Resultat affiché sur Postman lors de l'aboutissement de la requete
  res.json({
    message: "L'article a été supprimé avec succès !",
    dbNews,
  });
};

/***********/

// DELETE ALL
exports.deleteMany = function (req, res, next) {
  News.remove({}, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.end("Tous a été éffacé !");
    }
  });
};
