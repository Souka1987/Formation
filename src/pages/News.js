import React, { useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Article from "../components/Article";
import { store } from "../store";
import { useSelector } from "react-redux";
import { create, getNews } from "../store/actions/ArticleActions";
import DeleteAll from "../components/DeleteAll";

store.dispatch(getNews());

const News = (props) => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [error, setError] = useState(false);

  const listNews = useSelector((state) => state.article.newsData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submit:", content);
    store.dispatch(
      create({
        title,
        author,
        content,
        date: Date.now(),
      })
    );
    setTitle("");
    setAuthor("");
    setContent("");
    //}
  };

  return (
    <div className="news-container">
      <Navigation />
      <Logo />

      <h1>News</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Titre"
          value={title}
        />
        <input
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          placeholder="Auteur"
          value={author}
        />
        <textarea
          // style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Contenu"
          value={content}
        ></textarea>
        {/* {error && <p>Veuillez écrire un minimum de 140 caractères</p>} */}
        <input type="submit" value="Envoyer" />
        <br />
        <DeleteAll />
      </form>

      <ul>
        {listNews.length > 0 &&
          listNews.map((article) => (
            <Article key={article._id} article={article} />
          ))}
      </ul>
    </div>
  );
};
// .sort((a, b) => b.date - a.date)

export default News;
