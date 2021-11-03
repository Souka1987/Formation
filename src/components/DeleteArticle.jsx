import React from 'react';
import axios from "axios";
import { Button } from 'react-bootstrap';

const DeleteArticle = ({ id }) => {
  const handleDelete = () => {
    axios.delete("http://localhost:3003/articles/" + id);
    window.location.reload();
  };

  return (
    <Button variant="danger" size="sm"
      onClick={() => {
        if (window.confirm("Voulez-vous supprimer cet article ?")) {
          handleDelete();
        }
      }}
    >
      Supprimer
    </Button>
  );
};

export default DeleteArticle;