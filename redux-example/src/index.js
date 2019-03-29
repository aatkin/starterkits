import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import todoApp from "./reducers";
import AppComponent from "./App";
import "./index.css";

const store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById("root")
);
