import React from "react";
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from'react-redux'
import store from './redux/store'
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
