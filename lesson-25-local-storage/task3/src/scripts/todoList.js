import { createTask } from './createTask.js';
import { onToggleTask } from './updateTask.js'
export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', createTask);

  const listElem = document.querySelector(".list");
  listElem.addEventListener("click", onToggleTask);

}