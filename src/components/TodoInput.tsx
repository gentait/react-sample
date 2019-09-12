import React from "react";

interface Props {
  addTodo: Function;
}
export default class TodoInput extends React.Component<Props> {
  state = {
    inputValue: ""
  };
  handleClick = () => {
    this.props.addTodo(this.state.inputValue);
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: e.target.value
    });
  };
  render() {
    return (
      <div>
        <input
          placeholder="新規TODOを入力してください"
          onChange={this.handleChange}
          value={this.state.inputValue}
        />
        <button onClick={this.handleClick}>登録</button>
      </div>
    );
  }
}
