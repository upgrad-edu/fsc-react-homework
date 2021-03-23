import { createStore } from "redux";

import rootReducer from "../reducers";

const store = createStore(rootReducer, {
  todos: []
});

export default store;
