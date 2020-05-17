import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const Login = ({ startLogin }) => {
  return (
    <div className='login-container'>
      <button className='login-button' onClick={startLogin}>
        Login
      </button>
    </div>
  );
};

const LoginWithForm = () => {
  const fetchMetadata = require('fetch-metadata');

  const [username, setUsername] = useState('');
  const [metdata, setMetadata] = useState({});

  // useEffect(() => {
  //   const asyncFetch = async () => {
  //     const response = await fetchMetadata();

  //     setMetadata(response);
  //   };

  //   asyncFetch();
  // }, []);

  useEffect(() => {
    const unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      setUsername(user);
    });

    return () => {
      unsubscriber();
    };
  }, []);

  return (
    <div>
      <input
        placeholder='username'
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button>login</button>
      <div>{metadata}</div>
    </div>
  );
};

const mapDisptchToProps = (dispatch) => {
  return {
    startLogin: () => dispatch(startLogin()), // XXXrequest, XXXsuccess, XXXerror
    // loginRequest: () => dispatch(loginRequest()),
  };
};

export default connect(null, mapDisptchToProps)(Login);
