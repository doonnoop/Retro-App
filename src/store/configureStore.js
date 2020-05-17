import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import retroListReducer from '../reducers/retro';
import authRouter from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = (store) => (next) => (action) => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

const crashReporter = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    Raven.captureException(err, {
      extra: {
        action,
        state: store.getState(),
      },
    });
    throw err;
  }
};

const firebaseAuthMiddleware = (store) => (next) => (action) => {
  firebase.auth.onAuthStateChange(
    (user) => {
      if (!user) {
        store.dispatch(loginError(action.payload.uid));

        console.error();
      }

      store.dispatch(loginSuccess(uid));
    },
    () => {
      store.dispatch(networkError('NETWORK ERROR'));
    },
  );

  return next(action);
};

export default () => {
  const store = createStore(
    combineReducers({
      wentWell: retroListReducer('WENT_WELL'),
      toImprove: retroListReducer('TO_IMPROVE'),
      actionItems: retroListReducer('ACTION_ITEMS'),
      auth: authRouter,
    }),
    composeEnhancers(applyMiddleware(thunk, logger, crashReporter)),
  );

  // store.dispatch(startListeningToFirebaseAuth())

  return store;
};
