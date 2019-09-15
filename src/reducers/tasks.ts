import { INPUT_TASK, ADD_TASK, TasksState, TodoActionTypes } from "../types";
const initialState: TasksState = { task: "", tasks: [] };
export default function tasksReducer(
  state = initialState,
  action: TodoActionTypes
) {
  switch (action.type) {
    case INPUT_TASK:
      return { ...state, task: action.payload.task };
    case ADD_TASK:
      return { ...state, tasks: state.tasks.concat([action.payload.task]) };
    default:
      return state;
  }
}
