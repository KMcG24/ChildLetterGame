import React, { Component } from "react";
import RandomWord from "../RandomWord";
import Key from "../Key";
import "./App.css";
import data from "../../Data";
import Header from "../Header";
import css from "../RandomWord/randomword.module.css";
import child from "../../images/happychild.png";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: true,
      data: data,
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
        <Header />
        <div className={css.container}>
          <img src={child} alt="child" />
          <div className={css.bubble}>
            <RandomWord word={this.randomWord(this.state.data)} />
            <Key
              keyPressed={this.state.keypressed}
              word={this.randomWord(this.state.data)}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
