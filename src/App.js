import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";
import Navigation from "./components/Nav/Navigation";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
          <Card />
      </div>
    );
  }
}

export default App;
