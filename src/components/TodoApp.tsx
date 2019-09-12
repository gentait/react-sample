import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

interface State {
  tasks: { title: string; id: number }[];
  uniqueId: number;
}
export default class TodoApp extends React.Component<{}, State> {
  state = {
    tasks: [{ title: "Todo１つ目", id: 0 }, { title: "Todo２つ目", id: 1 }],
    uniqueId: 1
  };
  addTodo = (title: string) => {
    const { tasks, uniqueId } = this.state;
    tasks.push({ title, id: uniqueId });
    this.setState({ tasks, uniqueId: uniqueId + 1 });
  };
  resetTodo = () => {
    this.setState({
      tasks: []
    });
  };

  render() {
    return (
      <div>
        <h1>TODO App</h1>
        <button onClick={this.resetTodo}>リセット</button>
        <TodoInput addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}
