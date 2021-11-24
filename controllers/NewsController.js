/*
 * Countries Controller
 *
 * ****************** */

// Import du model
const News = require("../models/NewsModel");
const Article = require("../models/ArticleModel");

// Exemple de liens avec params avec le "?" + le "q" =>  https://search.brave.com/search?q=google&source=desktop

// GET ALL
// exports.getAll = async (req, res) => {
//   const dbNews = await News.find().populate("article");
//   console.log("getAll", req.params, req.query);
//   res.json({
//     message: "Salutations !!!!",
//     dbNews
//   });
// };

/***********/

// GET ID
// exports.getId = async (req, res) => {
//   const dbNews = await News.find().populate("article");
//   console.log("getid", req.params, req.query);
//   // res.send('dgfgreg')
//   res.json({
//     message: "getId ! " + req.params.id,
//     dbNews
//   });
// };

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
      data: news
    });
    // Sinon afficher l'erreur
  } else res.json({
    message: "Error, l'item n'a pas été créé !"
  });
};

/***********/

// PUT
// exports.editOne = (req, res) => {
//   console.log("put", req.query, req.body);
//   // Chercher l'article par son Id pour l'éditer
//   News.findByIdAndUpdate(req.params.id, {
//     ...req.body
//   }, (err, data) => {
//     if (err) throw err;
//     res.json({
//       message: "lien créé avec succès !",
//       data: article
//     });
//   });
//   res.json({
//     message: "Item edité avec succès !"
//   });
// };

// exports.getId = async (req, res) => {
//   // Nouvel article créé
//   const newsID = await News.findById(req.params.id).populate("article");
//   res.json({
//     message: "Article ID créé",
//     newsID
//   });
// };

/***********/

// DELETE ONE
exports.deleteOne = async (req, res) => {
  console.log("delete", req.query, req.params.id);
  const NewsId = await News.findById(req.params.id);
  console.log("NewsId DeleteOne", NewsId);


  if (NewsId.article.length > 0) {
    for (let i = 0; i < NewsId.article.length; i++) {
      console.log(
        "L'article de " +
        NewsId.article[i].author +
        " à bien été supprimer !"
      );
      await News.findByIdAndDelete(NewsId.article[i]._id);
    }

    News.findByIdAndDelete(req.params.id, (err, data) => {
      if (err) throw err;
      res.json({
        message: "l'Item à été supprimer avec success !"
      });
    });
  } else {
    News.findByIdAndDelete(req.params.id, (err, data) => {
      if (err) throw err;
      res.json({
        message: "l'Item à été supprimer avec success !"
      });
    });
  }
}
/***********/

// DELETE ALL
exports.deleteMany = function (req, res, next) {
  News.remove({}, function (err) {
    if (err) {
      console.log(err)
    } else {
      res.end('Tous a été éffacé !');
    }
  });
};