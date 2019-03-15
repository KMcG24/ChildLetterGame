import React, { Component } from "react";
import RandomWord from "../RandomWord";
import "./App.css";
import data from "../../Data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: data, isPlaying: true };
  }

  randomWord = data => {
    const word = data[Math.floor(Math.random() * data.length)];
    return word;
  };

  render() {
    // this.stateRANDOMWORD
    return (
      <>
        <div className="Game" />
        <RandomWord word={this.randomWord(this.state.data)} />
      </>
    );
  }
}

export default App;
