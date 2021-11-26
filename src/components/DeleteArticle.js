/***
 *
 * Delete One Button
 *
 */

import React from "react";
import { useDispatch } from "react-redux";
import { deleteOneNews } from "../store/actions/ArticleActions";

const DeleteArticle = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    // Rechargement
    window.location.reload();
  };
  // Transmettre les données du STORE avec dispatch (crud)
  dispatch(deleteOneNews(id));

  console.log("DeleteArticle");
  console.log(id);
  // console.log("button" + id);
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
