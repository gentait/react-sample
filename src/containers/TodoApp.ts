import { connect } from "react-redux";
import TodoApp from "../components/TodoApp";
import { inputTask, addTask } from "../actions/tasks";
import { TasksState, TodoActionTypes } from "../types";

function mapStateToProps({ task, tasks }: TasksState) {
  return {
    task,
    tasks
  };
}

function mapDispatchToProps(dispach: (action: TodoActionTypes) => void) {
  return {
    addTask(task: string) {
      dispach(addTask(task));
    },
    inputTask(task: string) {
      dispach(inputTask(task));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
