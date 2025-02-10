import { ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToDo } from "../types";

interface ToDoItemProps {
  todo: ToDo;
  onDelete: (id: number) => void;
}

function ToDoItem({ todo, onDelete }: ToDoItemProps) {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => onDelete(todo.id)}>
          <DeleteIcon color="error" />
        </IconButton>
      }
    >
      <ListItemText primary={todo.text} />
    </ListItem>
  );
}

export default ToDoItem;
