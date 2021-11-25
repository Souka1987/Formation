import React from "react";
// import axios from "axios";

const DeleteArticle = ({ articleId }) => {
  const handleDelete = () => {
    console.log("article delete");
    // axios.delete(`http://localhost:5000/news/${articleId}`);
    window.location.reload();
  };

  return (
    <button
      onClick={() => {
        if (window.confirm("Voulez-vous supprimer cet article ?")) {
          handleDelete();
        }
      }}
    >
      Supprimer
    </button>
  );
};

export default DeleteArticle;
