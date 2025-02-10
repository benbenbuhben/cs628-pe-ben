import { useState } from "react";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import ToDoList from "./components/ToDoList";
import { ToDo } from "./types";

function App() {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [task, setTask] = useState("");

  function handleAddTask() {
    if (task.trim() === "") return;

    const newTask: ToDo = { id: Date.now(), text: task };
    setTodos((prevTodos) => [...prevTodos, newTask]);
    setTask("");
  }

  function handleDeleteTask(id: number) {
    setTodos((prevTodos) => prevTodos.filter(({ id: todoID }) => todoID !== id));
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          ToDo List App
        </Typography>

        <TextField
          fullWidth
          label="Enter task description"
          variant="outlined"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleAddTask}
          sx={{ mb: 2 }}
        >
          Add Task
        </Button>

        <ToDoList todos={todos} onDelete={handleDeleteTask} />
      </Paper>
    </Container>
  );
}

export default App;
