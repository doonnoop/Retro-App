import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/style.scss";
import RetroApp from "./components/RetroApp";
import configureStore from "./store/configureStore";
import { startSetRetros } from "./actions/retro";
import "./firebase/firebase";
import Loading from "./components/Loading";

const store = configureStore();

ReactDOM.render(<Loading />, document.getElementById("app"));
store.dispatch(startSetRetros()).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <RetroApp />
    </Provider>,
    document.getElementById("app")
  );
});
