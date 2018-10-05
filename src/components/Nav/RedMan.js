import React, { Component } from "react";
import "../../App.css";
import redMan from "../../assets/redMan.svg";
// import purpleMan from "../../assets/purpleMan.svg";
// import blueGirl from "../../assets/blueGirl.svg";
// import greenGirl from "../../assets/greenGirl.svg";
// import yellowMan from "../../assets/yellowMan.svg";
// import orangeMan from "../../assets/orangeMan.svg";
// import Card from "./components/Card"

// import Navigation from "./components/Nav/Navigation";

class RedMan extends Component {

  handleClick = () => {
    console.log('red was clicked');
  }
  render() {
    return <div className="dancers">
        {/* <img className="purpleMan" src={purpleMan} alt="logo" /> */}
      <img onClick={this.handleClick} className="redMan" src={redMan} alt="logo" />
        {/* <img className="blueGirl" src={blueGirl} alt="logo" />
        <img className="orangeMan" src={orangeMan} alt="logo" />
      <img onClick={this.handleClick} className="yellowMan" src={yellowMan} alt="logo" />
      <img className="greenGirl" src={greenGirl} alt="logo" /> */}
      </div>;
  }
}

export default RedMan;
