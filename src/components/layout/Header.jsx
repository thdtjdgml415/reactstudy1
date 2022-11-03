import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="logo">
        <h1>
          <Link to="/">SONG</Link>
        </h1>
      </div>
      <div className="header__right">
        <ul>
          <li>
            <Link to="/Js">JS</Link>
          </li>
          <li>
            <Link to="/Css">CSS</Link>
          </li>
          <li>
            <Link to="/Movie">MOVIE</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
