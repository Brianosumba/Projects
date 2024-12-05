import { useTasks } from "../context/TaskContext";
import TaskItem from "./TaskItem";

import React from "react";

const TaskList = ({ setEditing, setTaskToEdit }) => {
  const { tasks } = useTasks();

  if (tasks.length === 0) {
    return <p>No tasks available. Add a new task!</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          setEditing={setEditing}
          setTaskToEdit={setTaskToEdit}
        />
      ))}
    </ul>
  );
};

export default TaskList;
