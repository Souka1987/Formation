/***
 *
 * Delete All Button
 *
 */

import React from "react";
import { useDispatch } from "react-redux";
import { deleteMany } from "../store/actions/ArticleActions";

const DeleteAll = () => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    // window.location.reload();
    // Transmettre les données du STORE avec dispatch (crud)
    dispatch(deleteMany());
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
      Remove All
      <span>&#9888;</span>
    </button>
  );
};

export default DeleteAll;
