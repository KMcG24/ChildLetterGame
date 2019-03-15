import React from "react";
import css from "./randomword.module.css";

const RandomWord = props => {
  return (
    <>
      <div className={css.word}>
        <div>{props.word}</div>
      </div>
    </>
  );
};

export default RandomWord;
