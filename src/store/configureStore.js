import { createStore, combineReducers } from "redux";
import retroListReducer from "../reducers/retro";

export default () => {
  const store = createStore(
    combineReducers({
      wentWell: retroListReducer("WENT_WELL"),
      toImprove: retroListReducer("TO_IMPROVE"),
      actionItems: retroListReducer("ACTION_ITEMS"),
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
