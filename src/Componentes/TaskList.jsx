import { TaskCard } from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskList() {
  
  const { tarea } = useContext(TaskContext);

  if (tarea.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No tienes tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tarea.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
