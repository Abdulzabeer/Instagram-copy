import { browserHistory } from "react-router";
import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";

//import Reducer
import rootReducer from "./reducers/index";

import comments from "./data/comments";
import posts from "./data/posts";

const defaultState = {
  comments,
  posts
};
const store = createStore(
  rootReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
