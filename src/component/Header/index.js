import React from "react";
import css from "./header.module.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <header className={css.header}>
          <h1>The Letter Game</h1>
        </header>
      </div>
    );
  }
}

export default Header;
