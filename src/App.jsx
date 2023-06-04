import TaskList from "./Componentes/TaskList";
import React from "react";
import TaskForm from "./Componentes/TaskForm";
("./TaskList");


export default function app() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
      <TaskForm />
      <TaskList />
      </div>
    </main>
  );
}
