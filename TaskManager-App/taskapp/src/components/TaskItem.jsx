import { useTasks } from "../context/TaskContext";

const TaskItem = ({ task, setEditing, setTaskToEdit }) => {
  const { deleteTask, markComplete } = useTasks();

  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.title}
      </span>
      <button onClick={() => markComplete(task.id)}>
        {task.completed ? "undo" : "Complete"}
      </button>
      <button
        onClick={() => {
          setTaskToEdit(task);
          setEditing(true);
        }}
      >
        Edit
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
