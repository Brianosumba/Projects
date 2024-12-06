import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeButton from "./components/ThemeButton";

const App = () => {
  const [editing, setEditing] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  return (
    <ThemeProvider>
      <div className={`app-container ${editing ? "editing-mode" : ""}`}>
        <h1>Task Manager</h1>
        <ThemeButton />
        <TaskForm taskToEdit={taskToEdit} setEditing={setEditing} />
        <TaskList setEditing={setEditing} setTaskToEdit={setTaskToEdit} />
      </div>
    </ThemeProvider>
  );
};

export default App;
