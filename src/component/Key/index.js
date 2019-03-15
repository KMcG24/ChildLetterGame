import React from "react";

handleKey = event => {
	this.props.keyCode = event.keyCode;
};

const Key = props => {
	return <div> onKeyUp={this.handleKey} </div>;
};
export default Key;
