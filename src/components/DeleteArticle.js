import React from "react";
// import axios from "axios";

const DeleteArticle = ({article}) => {
  const handleDelete = () => {
    
    // axios.delete(`http://localhost:5000/news/${news.id}`);
    // window.location.reload();
  };
  console.log("articleDelete");
  console.log(article);
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
