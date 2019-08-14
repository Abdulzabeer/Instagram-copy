// let's go!
import React from "react";
import { render } from "react-dom";
import css from "./styles/style.styl";
import App from "./components/App";
import PhotoGrid from "./components/PhotoGrid";
import Single from "./components/Single";
import * as Sentry from "@sentry/browser";
import { Route, Router, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";
import store, { history } from "./store";
const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);
Sentry.init({
  dsn: "https://4b66a5aabdc342aab2b2d0557f2dec09@sentry.io/1530518"
});
render(routes, document.getElementById("root"));
