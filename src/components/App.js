import "../styles/App.css";

import React, { Component } from "react";
import Board from "./Board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <span>Trello</span>
          <div className="Navbar">
            <button className="NavbarButton">Home</button>
            <button className="NavbarButton">Search</button>
          </div>
        </div>
        <Board />
      </div>
    );
  }
}

export default App;
