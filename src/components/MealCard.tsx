import React from "react";
import Card from "react-bootstrap/Card";
import { Meal } from "../types";
import { Link } from "react-router-dom";

export default function MealCard(props: Meal) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.imgUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <Link to={`/meal/${props.id}`}>View Meal</Link>
      </Card.Body>
    </Card>
  );
}
