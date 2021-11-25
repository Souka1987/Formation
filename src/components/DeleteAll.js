import React from "react";
import axios from "axios";

const DeleteAll = () => {
  const handleDelete = () => {
    axios.delete("http://localhost:5000/");
    window.location.reload();
  };

  return (
    <button
      onClick={() => {
        if (window.confirm("Voulez-vous supprimer tous les articles ?")) {
          handleDelete();
        }
      }}
    >
      <span>&#9888;</span>
      Supprimer tous les articles
      <span>&#9888;</span>
    </button>
  );
};

export default DeleteAll;
