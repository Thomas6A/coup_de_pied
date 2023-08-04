import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const StreamsCards = ({ image, title, user, game, view }) => {
  return (
    <Link to={"/Stream/" + user} className="text-decoration-none">
      <Card style={{ width: "18rem" }} className="bg-danger">
        <Card.Img variant="top" src={image.replace("-{width}x{height}", "")} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{user}</Card.Text>
          <Card.Text>{game}</Card.Text>
          <Card.Text>Views : {view}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default StreamsCards;
