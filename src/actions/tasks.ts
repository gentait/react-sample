import { INPUT_TASK, ADD_TASK, TodoActionTypes } from "../types";

export const inputTask = (task: string): TodoActionTypes => {
  return {
    type: INPUT_TASK,
    payload: { task }
  };
};
export const addTask = (task: string): TodoActionTypes => {
  return {
    type: ADD_TASK,
    payload: { task }
  };
};
