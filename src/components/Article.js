import React, { useState } from "react";
import axios from "axios";

import DeleteArticle from "./DeleteArticle";

const Article = ({ article }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditContent] = useState("");

  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    return newDate;
  };

  const handleEdit = () => {
    const data = {
      // Indiquer les datas souhaités
      title: article.title,
      author: article.author,
      content: editedContent ? editedContent : article.content,
      date: article.date,
    };

    axios.put("http://localhost:5000/news/" + article._id, data).then(() => {
      setIsEditing(false);
    });
  };

  return (
    <div
      className="article"
      style={{ background: isEditing ? "#f3feff" : "white" }}
    >
      <div className="card-header">
        {/* Titre */}
        <h3>{article.title}</h3>
        {/* Date */}
        <em>Posté le {dateParser(article.date)}</em>
      </div>
      {/* Contenu */}
      {isEditing ? (
        <textarea
          onChange={(e) => setEditContent(e.target.value)}
          autoFocus
          defaultValue={editedContent ? editedContent : article.content}
        ></textarea>
      ) : (
        <p>{editedContent ? editedContent : article.content}</p>
      )}
      <br />
      {/* Auteur */}
      <em>By: {article.author}</em>
      {/* Bouttons actions */}
      <div className="btn-container">
        {isEditing ? (
          <button onClick={handleEdit}>Valider</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <DeleteArticle key={article._id} />
       
      </div>
    </div>
  );
};

export default Article;
