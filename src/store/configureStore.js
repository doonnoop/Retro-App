import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import retroListReducer from "../reducers/retro";
import authRouter from "../reducers/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      wentWell: retroListReducer("WENT_WELL"),
      toImprove: retroListReducer("TO_IMPROVE"),
      actionItems: retroListReducer("ACTION_ITEMS"),
      auth: authRouter,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
