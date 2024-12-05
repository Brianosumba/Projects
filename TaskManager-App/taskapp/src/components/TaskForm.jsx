import { useState, useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import "../styles/TaskForm.css";

const TaskForm = ({ taskToEdit, setEditing }) => {
  const { addTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    id: "",
    title: "",
    completed: false,
  });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskToEdit) {
      updateTask(task.id, task);
      setEditing(false);
    } else {
      addTask({ ...task, id: Date.now().toString() });
    }
    setTask({ id: "", title: "", completed: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <button type="submit">{taskToEdit ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
