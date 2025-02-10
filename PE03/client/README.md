## Input-Process-Output Model for ToDo List App

### Input
The ToDo List App allows users to enter a task description into a text field. This input is handled using React’s useState hook, which stores the current value of the input field. When the user clicks the "Add Task" button, the entered task is captured and added to the list of ToDos. Additionally, each task has a "Delete" button, which lets the user remove tasks from the list.

### Process
When a task is added, a new ToDo object is created with a unique id and stored in the app’s state. The list of tasks is managed using the setTodos function, which updates the array of tasks. Clicking the "Delete" button filters out the selected task from the array.

### Output
The updated list of ToDos is displayed dynamically using Material UI’s List and ListItem components. Tasks appear on the screen, and any modifications—like adding or deleting a task—are immediately reflected in the UI.