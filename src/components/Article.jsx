import React, { useState } from "react";
import axios from "axios";
import DeleteArticle from "./DeleteArticle";
import { Button, Card, Col } from "react-bootstrap";

// Destructuration au lieu de "props" mettre "article"
const Article = ({ article }) => {
  // Pour l'édition
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent] = useState("");

  // Date des articles
  const dateParser = (date) => {
    //   Indiquer la langue souhaitée ainsi que l'affichage
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
      author: article.author,
      content: editedContent ? editedContent : article.content,
      date: article.date,
    };
    //   put = edit + ID
    axios.put("http://localhost:3003/articles/" + article.id, data).then(() => {
      setIsEditing(false);
    });
  };

  return (
    <div>
      <Col>
        <Card style={{ background: isEditing ? "#f3feff" : "white" }}>
          <Card.Body>
            <Card.Title>
              <li>
                <h3>{article.author}</h3>
              </li>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <em>Posté le: {dateParser(article.date)}</em>
            </Card.Subtitle>
            <Card.Text>
              {isEditing ? (
                <textarea
                  onChange={(e) => setIsEditing(e.target.value)}
                  autoFocus
                  defaultValue={editedContent ? editedContent : article.content}
                ></textarea>
              ) : (
                <p>{editedContent ? editedContent : article.content}</p>
              )}
              {isEditing ? (
                // Transformer le boutton "edit" en valider
                <Button size="sm" onClick={handleEdit}>
                  Valider
                </Button>
              ) : (
                <Button size="sm" onClick={() => setIsEditing(true)}>
                  Edit
                </Button>
              )}
              <DeleteArticle id={article.id} />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Article;
