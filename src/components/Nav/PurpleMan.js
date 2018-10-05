import React, { Component } from "react";
import "../../App.css";
import purpleMan from "../../assets/purpleMan.svg";

// import Card from "./components/Card"

// import Navigation from "./components/Nav/Navigation";

class PurpleMan extends Component {

    handleClick = () => {
        console.log('puple was clicked');
    }
    render() {
        return <div className="dancers">
            <img onClick={this.handleClick} className="purpleMan" src={purpleMan} alt="logo" />
          
        </div>;
    }
}

export default PurpleMan;
