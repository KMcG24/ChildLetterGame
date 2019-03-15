import React from "react";
import css from "./EndGame.module.css";

const EndGame = props => {
	return (
		<div className="EndGame">
			<div className="wellDone"> Well Done! </div>
			<div className="score"> Your Score: ${props.score}</div>
		</div>
	);
};

export default EndGame;
