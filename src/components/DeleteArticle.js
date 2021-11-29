/***
 *
 * Delete One Button
 *
 */

import React from "react";
import { useDispatch } from "react-redux";
import { deleteOne } from "../store/actions/ArticleActions";

const DeleteArticle = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    // Transmettre les données du STORE avec dispatch (crud)
    dispatch(deleteOne(id));
  };

  // console.log("DeleteArticle", id);
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
