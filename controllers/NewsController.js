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
exports.create = (req, res) => {
  const b = req.body;
  console.log("req.body", b);
  if (b.title && b.content) {
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

    res.json({
      message: "Item creé avec success !",
      data: news,
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
  News.findByIdAndUpdate(
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
  // console.log("delete", req.query, req.params.id);
  const NewsId = await News.findById(req.params.id);
  console.log("NewsId DeleteOne", NewsId);

  News.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) throw err;
    res.json({
      message: "l'Item à été supprimer avec success !",
    });
  });
};

/***********/

// DELETE ALL
exports.deleteMany = function (req, res, next) {
  News.deleteOne({}, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.end("Tous a été éffacé !");
    }
  });
};
