import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  const [editing, setEditing] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm taskToEdit={taskToEdit} setEditing={setEditing} />
      <TaskList setEditing={setEditing} setTaskToEdit={setTaskToEdit} />
    </div>
  );
};

export default App;
