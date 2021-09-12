import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./state/store";
import { Provider } from "react-redux";

import App from "./views/App";

const reduxStore = configureStore(window.RDUX_INITIAL_DATA);

ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);