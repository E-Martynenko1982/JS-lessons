import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './render.js';
import { getTasksList } from './tasksGateWay.js';
import { setItem } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList()
    .then(tasksList => {
      setItem('tasksList', tasksList)
      renderTasks();
    })

  initTodoListHandlers();
});

const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderTasks()
  }
};
window.addEventListener('storage', onStorageChange)

// 1.Get data from server
// 2.Save data to front-end storage

