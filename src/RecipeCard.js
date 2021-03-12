import { Card, Button } from "react-bootstrap";

const BreakfastCard = ({ image, name, link }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <a href={link} target="_blank noreferrer">
          <Button variant="primary">Get the Recipe</Button>
        </a>
      </Card.Body>
    </Card>
  );
};

const LunchCard = ({ image, name, link }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <a href={link} target="_blank noreferrer">
          <Button variant="primary">Get the Recipe</Button>
        </a>
      </Card.Body>
    </Card>
  );
};

const DinnerCard = ({ image, name, link }) => {
  return (
    <Card style={{ width: "12rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <a href={link} target="_blank noreferrer">
          <Button variant="primary">Get the Recipe</Button>
        </a>
      </Card.Body>
    </Card>
  );
};

export { BreakfastCard, LunchCard, DinnerCard };
