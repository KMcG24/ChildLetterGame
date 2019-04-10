import React, { Component } from "react";
import RandomWord from "../RandomWord";
import WordInput from "../WordInput";
import Key from "../Key";
import "./App.css";
import data from "../../Data";
import Header from "../Header";
import styles from "../WordInput/WordInput.module.css";
import css from "../RandomWord/randomword.module.css";
import child from "../../images/happychild.png";
import Endgame from "../EndGame";
import Score from "../Score";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: true,
      data: data,
      keypressed: null,
      randomWord: "",
      value: "",
      score: 0
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", event => {
      console.log("key code", event.keyCode);
      if (event.keyCode === 27) {
        this.setState(() => ({
          isPlaying: false
        }));
      }
      //press enter to get value to clear
      if (event.keyCode === 13) {
        this.randomWord(this.state.data);
        this.setState(() => ({
          //isPlaying: true,
          keydown: String.fromCharCode(event.keyCode),
          value: ""
        }));
      }
    });
    //to get random word to appear on first render
    this.randomWord(this.state.data);
  }

  //function to randomise words
  randomWord = data => {
    const word = data[Math.floor(Math.random() * data.length)];
    this.setState(() => ({
      randomWord: word
    }));
  };

  //getting typed word to compare to random word in state
  //attempting to keep score
  handleChange = event => {
    const { value } = event.target;
    console.log("value", value);
    this.setState(() => ({ value }));

    console.log("state value", this.state.value);

    if (value === this.state.randomWord) {
      console.log("match");
      this.keepScore();
    }
  };

  keepScore() {
    this.setState(() => ({ score: this.state.score + 1 }));
    console.log("plusone");
  }

  render() {
    return (
      <>
        {!this.state.isPlaying ? (
          <Endgame score={this.state.score} />
        ) : (
          <>
            <Header />
            <div className={css.container}>
              <img src={child} alt="child" />
              <div className={css.bubble}>
                <WordInput
                  value={this.state.value}
                  handleChange={this.handleChange}
                  randomWord={this.state.randomWord}
                />

                <br />
                <RandomWord
                  word={this.state.randomWord}
                  show={this.state.show}
                />
                <Key
                  keyPressed={this.state.keypressed}
                  //word={() => this.randomWord(this.state.data)}
                />
              </div>
            </div>
            <div>
              <Score score={this.state.score} />
            </div>
          </>
        )}
      </>
    );
  }
}

export default App;
