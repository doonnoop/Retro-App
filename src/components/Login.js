import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const Login = ({ startLogin }) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Retro App</h1>
        <p>Best Team retrospective App</p>
        <button onClick={startLogin} className="big-button">
          Login
        </button>
      </div>
    </div>
  );
};

const mapDisptchToProps = (dispatch) => {
  return {
    startLogin: () => dispatch(startLogin()),
  };
};

export default connect(null, mapDisptchToProps)(Login);
