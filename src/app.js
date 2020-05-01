import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/style.scss";
import RetroApp from "./components/RetroApp";
import configureStore from "./store/configureStore";
import { addRetro, deleteRetro } from "./actions/retro";

const store = configureStore();
const item1 = store.dispatch(addRetro({ list: "wentWell", content: "well 1" }));
store.dispatch(addRetro({ list: "wentWell", content: "well 2" }));
store.dispatch(addRetro({ list: "toImprove", content: "improve 1" }));
store.dispatch(addRetro({ list: "actionItems", content: "action 1" }));

// store.dispatch(deleteRetro({ list: "wentWell", id: item1.retro.id }));
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <RetroApp />
  </Provider>,
  document.getElementById("app")
);
