import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

const API_ID = "669ffd56";
const API_KEY = "99bbd34468d8bd690f225c2ec33741af";

class MealPlan extends Component {
  state = {
    recipes: [],
  };

  //Fetch API with balanced diet recipes
  componentDidMount() {
    axios
      .get(
        `https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=&diet=balanced`
      )
      .then((res) => {
        console.log(res);
        this.setState({
          recipes: res.data.hits,
        });
      });
  }

  //displaying recipes per week
  render() {
    const { recipes } = this.state;
    const recipeList = recipes.length ? (
      recipes.map((recipe) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={recipe.recipe.image} />
            <Card.Body>
              <Card.Title>
                {recipe.recipe.label} - {recipe.recipe.mealType}
              </Card.Title>
              <Card.Text>
                {recipe.recipe.ingredientLines.map((ing) => (
                  <ul>
                    <li> {ing} </li>
                  </ul>
                ))}
                vs
              </Card.Text>
              <a href={recipe.recipe.url} target="_blank noreferrer">
                <Button variant="primary">Get the Recipe</Button>
              </a>
            </Card.Body>
          </Card>
        );
      })
    ) : (
      <div>
        {" "}
        <p>Meals are cooking...</p>{" "}
      </div>
    );
    return (
      <div>
        <strong>Meals</strong>
        {recipeList}
      </div>
    );
  }
}

export default MealPlan;
