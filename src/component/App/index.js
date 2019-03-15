import React, { Component } from "react";
import RandomWord from "../RandomWord";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: ["apple", "banana", "cat"], isPlaying: true };
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
