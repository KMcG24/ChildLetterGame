import React, { Component } from "react";
import RandomWord from "../RandomWord";
import Key from "../Key";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["apple", "banana", "cat"],
      isPlaying: true,
      keypressed: null
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", event => {
      if (event.keyCode === "27") {
        this.setState(() => ({
          isPlaying: false
        }));
      } else {
        this.setState(() => ({
          keypressed: String.fromCharCode(event.keyCode)
        }));
      }
    });
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
        <Key
          keyPressed={this.state.keypressed}
          word={this.randomWord(this.state.data)}
        />
      </>
    );
  }
}

export default App;
