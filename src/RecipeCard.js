import { Card, Button } from "react-bootstrap";

const RecipeCard = ({ image, name, link, ingredients }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text> {ingredients}</Card.Text>
        <a href={link} target="_blank noreferrer">
          <Button variant="primary">Get the Recipe</Button>
        </a>
      </Card.Body>
    </Card>
  );
};
export default RecipeCard;
