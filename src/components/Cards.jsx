import React from "react";
import { Card } from "react-bootstrap";

const Cards = (props) => {
  return (
    <div>
        <Card style={{ width: "18rem" }}>
            <Card.Img
            variant="top"
            value={props}
            src={props.img.url}
            />
            <Card.Body>
                <Card.Title>Coucou c'est Ouam ! {props.img.id} </Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                    aperiam quibusdam nesciunt quod, cupiditate recusandae error fuga
                    labore accusamus obcaecati id sed at ducimus dolores fugiat sit rem
                    facilis exercitationem!
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  );
};

export default Cards;
