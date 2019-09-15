export interface TasksState {
  task: string;
  tasks: string[];
}

export const INPUT_TASK = "INPUT_TASK";
export const ADD_TASK = "ADD_TASK";

interface InputTaskAction {
  type: typeof INPUT_TASK;
  payload: {
    task: string;
  };
}
interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: {
    task: string;
  };
}

export type TodoActionTypes = InputTaskAction | AddTaskAction;
