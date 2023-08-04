import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const GamesCards = ({ image, title , id}) => {
  return (
    <Link to={"/StreamGames/" + id} className="text-decoration-none">
      <Card style={{ width: "18rem" }} className="bg-danger">
        <Card.Img variant="top" src={image.replace("-{width}x{height}", "").replace("-52x72","")} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default GamesCards;
