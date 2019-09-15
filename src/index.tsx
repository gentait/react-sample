import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import tasksReducer from "./reducers/tasks";
import TodoApp from "./containers/TodoApp";

const store = createStore(tasksReducer);
// 実際は、ここでアプリケーションコンポーネントを読み込ませる
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);
