import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';
export const createTask = () => {
  const taskInputElem = document.querySelector('.task-input');
  const text = taskInputElem.value.trim();

  if (!text) return;

  taskInputElem.value = '';
  const tasksList = getItem('tasksList') || [];
  const newTask = {
    id: Math.random().toString(),
    text,
    done: false,
  };
  tasksList.push(newTask);
  setItem('tasksList', tasksList);


  renderTasks()
}