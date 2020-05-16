import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const Login = ({ startLogin }) => {
  return (
    <div className="login-container">
      <button className="login-button" onClick={startLogin}>
        Login
      </button>
    </div>
  );
};

const mapDisptchToProps = (dispatch) => {
  return {
    startLogin: () => dispatch(startLogin()),
  };
};

export default connect(null, mapDisptchToProps)(Login);
