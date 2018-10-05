import React, { Component } from "react";
import "./App.css";
// import Navigation from "./components/Nav/Navigation"
// import Card from "./components/Card"
import Dancers from "./components/Nav/Dancers";

// import Navigation from "./components/Nav/Navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navigation /> */}
        <div className="dancers">
          <Dancers />
        </div>
      </div>
    );
  }
}

export default App;
