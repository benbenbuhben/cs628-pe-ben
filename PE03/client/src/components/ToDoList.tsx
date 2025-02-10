import { List } from "@mui/material";
import ToDoItem from "./ToDoItem";
import { ToDo } from "../types";

interface ToDoListProps {
  todos: ToDo[];
  onDelete: (id: number) => void;
}

function ToDoList({ todos, onDelete }: ToDoListProps) {
  return (
    <List>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </List>
  );
}

export default ToDoList;
