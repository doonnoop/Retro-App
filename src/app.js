import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import configureStore from './store/configureStore';
import { startSetRetros } from './actions/retro';
import { firebase } from './firebase/firebase';
import Loading from './components/Loading';
import AppRouter, { history } from './routers/AppRouter';
import { login, logout } from './actions/auth';

const store = configureStore();
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <Provider store={store}>
        <AppRouter />
      </Provider>,
      document.getElementById('app'),
    );
    hasRendered = true;
  }
};

ReactDOM.render(<Loading />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('login');
    store.dispatch(login(user.uid));
    store.dispatch(startSetRetros()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    console.log('logout');
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
