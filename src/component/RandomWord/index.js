import React from "react";
import css from "./randomword.module.css";

const RandomWord = props => {
  return (
    <>
      <div className={css.word}>{props.word}</div>
    </>
  );
};

export default RandomWord;
