import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { counter } from "./reducers/reducers";
import { createStore } from "redux";
import {Provider} from "react-redux";

const counterStore = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={counterStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
