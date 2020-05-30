import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header-con">
      <div className="header">
        <h1 className="header__title">{props.title}</h1>
        {props.subtitle && (
          <h2 className="header__subtitle">{props.subtitle}</h2>
        )}
      </div>
      <div>
        <Link to="/dashboard" className="button">
          Back
        </Link>
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision",
};

export default Header;
