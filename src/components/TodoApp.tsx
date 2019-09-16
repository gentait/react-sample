import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  Input,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

interface Props {
  task: string;
  tasks: string[];
  inputTask: Function;
  addTask: Function;
}
const TodoApp: React.FC<Props> = ({ task, tasks, inputTask, addTask }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography>Todo</Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: 16 }}>
        <Input onChange={e => inputTask(e.target.value)} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => addTask(task)}
        >
          add
        </Button>
        <List>
          {tasks.map(function(item, i) {
            return (
              <ListItem key={i}>
                <ListItemText primary={`・${item}`} />
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
};
export default TodoApp;
