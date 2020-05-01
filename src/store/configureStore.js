import { createStore, combineReducers } from "redux";
import retroReducer from "../reducers/retro";

export default () => {
  const store = createStore(
    combineReducers({
      retros: retroReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
