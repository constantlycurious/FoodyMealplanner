import React, { Component } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

const API_ID = "669ffd56";
const API_KEY = "99bbd34468d8bd690f225c2ec33741af";

class MealPlan extends Component {
  state = {
    recipes: [],
    diet: "balanced",
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
          <RecipeCard
            image={recipe.recipe.image}
            name={recipe.recipe.label}
            link={recipe.recipe.url}
          />
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
        <h1>Meal Planner Happiness</h1>
        {recipeList}
      </div>
    );
  }
}

export default MealPlan;
