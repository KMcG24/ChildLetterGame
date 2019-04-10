import React from "react";
import styles from "./WordInput.module.css";

class WordInput extends React.Component {
  render() {
    return (
      <div className={styles.inputBox}>
        <input
          value={this.props.value}
          onChange={this.props.handleChange}
          className={styles.inputField}
        />
        <div className={styles.answer}>
          {/*         
{if 
(this.props.value.length === this.props.randomWord.length) {

  if (this.props.value === this.props.randomWord)
}

 ? "Good Job!!!" : "Try Again"
 } */}

          {/* if ({this.props.value === this.props.randomWord ? "Good Job!!!" : ""})
          {this.props.value.length === this.props.randomWord.length
            ? "Good Job!!!"
            : ""} */}
        </div>
      </div>
    );
  }
}

export default WordInput;
