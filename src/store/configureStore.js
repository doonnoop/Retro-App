import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import retroListReducer from "../reducers/retro";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      wentWell: retroListReducer("WENT_WELL"),
      toImprove: retroListReducer("TO_IMPROVE"),
      actionItems: retroListReducer("ACTION_ITEMS"),
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
