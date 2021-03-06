import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/rootReducer";
import App from "./App";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
