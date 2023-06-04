import { createContext, useState, useEffect } from "react";
import { tasks } from "../Componentes/Task";
import React from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tarea, setTarea] = useState(tasks);

  function createTask(task) {
    setTarea([
      ...tarea,
      {
        title: task.tittle,
        id: tarea.length,
        description: task.descripcion,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTarea(tarea.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    localStorage.setItem("tareass", JSON.stringify(tarea));
  }, [tarea]);

  return (
    <TaskContext.Provider
      value={{
        tarea,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
