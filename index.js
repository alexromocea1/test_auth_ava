import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { runWithAdal } from "react-adal";
import { authContext } from "./functions/auth";

const DO_NOT_LOGIN = false;

runWithAdal(
  authContext,
  () => {
    ReactDOM.render(
      <Router>
        <App />
      </Router>,
      document.getElementById("root")
    );
  },
  DO_NOT_LOGIN
);
