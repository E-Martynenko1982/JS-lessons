import { renderTasks } from './render';
import { getItem, setItem } from './storage';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value.trim();

  if (!text) return;
  taskTitleInputElem.value = '';

  const tasksList = getItem('tasksList') || [];
  const newTasksList = tasksList.concat({
    id: String(Date.now()),
    createDate: new Date().toISOString(),
    text,
    done: false,
  })

  setItem('tasksList', newTasksList)

  renderTasks();
};