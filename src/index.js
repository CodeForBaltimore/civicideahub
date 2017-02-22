import React from "react";
import { render } from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from "react-router";

import App from "./app/App.jsx";

render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById("app")
);
