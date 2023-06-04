const tasksFromLocalStorage = localStorage.getItem("tareass");
export const tasks = JSON.parse(tasksFromLocalStorage) ?? [];