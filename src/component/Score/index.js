import React from "react";
import css from "./score.module.css";

class Score extends React.Component {
  render() {
    return (
      <div className={css.scoreBox}>
        You have spelled {this.props.score} words correctly!
      </div>
    );
  }
}

export default Score;
