import React from "react";
import TodoItem from "./TodoItem";

interface Props {
  tasks: { title: string; id: number }[];
}
export default class TodoList extends React.Component<Props> {
  render() {
    const list = this.props.tasks.map(todo => {
      return <TodoItem {...todo} key={todo.id} />;
    });
    return (
      <div>
        <ul>{list}</ul>
      </div>
    );
  }
}
