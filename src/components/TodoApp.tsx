import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default class TodoApp extends React.Component {
  state = {
    tasks: [{ title: "Todo１つ目", id: 0 }, { title: "Todo２つ目", id: 1 }],
    uniqueId: 1
  };
  addTodo = (title: string) => {
    const { tasks, uniqueId } = this.state;
    tasks.push({ title, id: uniqueId });
    this.setState({ tasks, uniqueId: uniqueId + 1 });
  };

  render() {
    return (
      <div>
        <h1>TODO App</h1>
        <TodoInput addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}
