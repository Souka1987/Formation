import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "../components/Article";
import Navigation from "../components/Navigation";


const News = () => {
  // Mettre en place les données
  const [newsData, setNewsData] = useState([]);
  //   Input author
  const [author, setAuthor] = useState("");
  //   Textarea
  const [content, setContent] = useState("");
  //   Gestion des erreurs
  const [error, setError] = useState(false);

  // Evite les répétitions
  useEffect(() => {
    getData();
    // callback
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:3003/articles")
      .then((res) => setNewsData(res.data));
  };

  //   Gère la soumssion pour le formulaire
  const handleSubmit = (e) => {
    //   On empêche la page de se recharger
    e.preventDefault();
    // Gestion des erreurs
    if (content.length < 140) {
      setError(true);
    } else {
      // Incrémentation de la base de données
      axios
        .post("http://localhost:3003/articles", {
          author,
          content,
          date: Date.now(),
        }) //   Remettre à zéro après envoi de la requête
        .then(() => {
          // Une fois le formulaire passé aler sur false
          setError(false);
          //   Définir les datas dont on a besoin
          setAuthor("");
          setContent("");
          // Aller chercher la data
          getData();
        });
    }
  };

  return (
    <div className="news-container">
       <Navigation/>
      <h1>News</h1>

      {/* Soumettre le formulaire = lorsque l'on clique sur le bouton 
      +récupération de l'évènement */}
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          placeholder="Nom"
          //   Pour remettre la valeur à zéro
          value={author}
        />
        <textarea
          // Afficher et souligner l'erreur
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Message"
          //   Pour remettre la valeur à zéro
          value={content}
        ></textarea>
        {/* Indiquer le texte ci-dessous si l'erreur est véridique */}
        {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
        <input type="submit" value="Envoyer" />
      </form>

      <ul>
        {newsData
          // Sort = trier
          .sort((a, b) => b.date - a.date)
          .map((article) => (
            // Props = faire passer des datas
            <Article key={article.id} article={article} />
          ))}
      </ul>
    </div>
  );
};

export default News;
