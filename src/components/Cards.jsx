import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const Cards = (props) => {
  const { university } = props;
  //   console.log(university);

  return (
    <div>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Body>
                <Card.Title>
                  <li>Nom: {university.name}</li>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <li>Pays: {university.country}</li>
                </Card.Subtitle>
                <Card.Text>Nom de domaine: {university.domains}</Card.Text>
                <Card.Link href="#">web: {university.web_pages}</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cards;
