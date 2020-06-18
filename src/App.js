import React from "react";
import data from "./data.json";
import CardList from "./CardList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route
          path={["/:id", "/"]}
          render={props => (
            <CardList
              data={data.cardData}
              {...props}
              location={props.match}
            />
          )}
        />
      </Router>
    </div>
  );
}
