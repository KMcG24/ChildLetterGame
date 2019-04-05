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
      console.log(event.keyCode);
      if (event.keyCode === 27) {
        this.setState(() => ({
          isPlaying: false
        }));
      } 
      if (event.keyCode ===13) {
this.setState(() => ({
isPlaying: true,
keydown: String.fromCharCode(event.keyCode)


})
)

      }
 
    });
  }

  randomWord = data => {
    const word = data[Math.floor(Math.random() * data.length)];
    return word;
  };



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
              <WordInput/>
              <br></br>
                <RandomWord word={this.randomWord(this.state.data)} />
                <Key
                  keyPressed={this.state.keypressed}
                  word={this.randomWord(this.state.data)}
                />
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default App;
