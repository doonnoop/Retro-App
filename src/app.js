import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/style.scss";
import RetroApp from "./components/RetroApp";
import configureStore from "./store/configureStore";
import { addRetro } from "./actions/retro";

const store = configureStore();
store.dispatch(addRetro({ list: "Went Well", content: "well 1" }));
store.dispatch(addRetro({ list: "Went Well", content: "well 2" }));
store.dispatch(addRetro({ list: "To Improve", content: "improve 1" }));
store.dispatch(addRetro({ list: "Action Items", content: "action 1" }));

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <RetroApp />
  </Provider>,
  document.getElementById("app")
);
