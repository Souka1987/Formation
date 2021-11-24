/*
 * Comment Controllers
 * ****************** */

// Import des models
const Article = require("../models/ArticleModel");
const News = require("../models/NewsModel");

exports.create = async (req, res) => {
  const b = req.body;
  console.log("News: req.body", req.body, req.params);

  if (b.title && b.content && req.params.id) {
    // On définit la construction de notre article
    const article = new Article({
      ...req.body,
      parent: req.params.id,
    });

    console.log("_id news", article, article._id);

    // Et on sauvegarde nos modifications
    article.save((err) => {
      if (err) return handleError(err);
    });

    // Récupéré les anciens commentaires
    const NewsId = await News.findById(req.params.id);
    console.log("NewsID 1", NewsId.news);
    NewsId.news.push(news._id);
    console.log("NewsID 2", NewsId.news);

    News.findByIdAndUpdate(
      req.params.id,
      {
        news: NewsId.news,
      },
      (err, data) => {
        if (err) throw err;
        res.json({ message: "news créé avec success !", data: news });
      }
    );
  } else res.json({ message: "Error, l'news n'as pas été créé !" });
};
