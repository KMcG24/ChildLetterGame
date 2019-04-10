import React from "react";
import css from "./EndGame.module.css";

const EndGame = props => {
  return (
    <div className="EndGame">
      <div className={css.greeting}> Well Done! </div>
      <div className={css.score}> Your Score: {props.score}</div>
    </div>
  );
};

export default EndGame;
