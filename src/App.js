import React from "react";
import Navbar from './Navbar'
import Meals from "./MealPlanner";
import Home from "./Home";
import About from "./About"
import Quotes from "./Quotes"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/plan">
            <Quotes />
            <Meals />
          </Route>
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );

}

export default App;