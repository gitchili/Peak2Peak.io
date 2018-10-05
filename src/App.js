import React, { Component } from "react";
import "./App.css";
// import Navigation from "./components/Nav/Navigation"
// import Card from "./components/Card"
import RedMan from "./components/Nav/RedMan";
import PurpleMan from "./components/Nav/PurpleMan";

// import Navigation from "./components/Nav/Navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navigation /> */}
        <div className="dancers">
          <RedMan />
          <PurpleMan />
        </div>
      </div>
    );
  }
}

export default App;
