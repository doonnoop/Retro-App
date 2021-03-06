import React from "react";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

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
        <button onClick={props.startLogout} className="button">
          Logout
        </button>
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: "Retro App",
};

const mapDisptchToProps = (dispatch) => {
  return {
    startLogout: () => dispatch(startLogout()),
  };
};

export default connect(null, mapDisptchToProps)(Header);
