

const tasks = [];


const renderTasks = tasksList => {
  const listElem = document.querySelector(".list");
  listElem.innerHTML = "";

  const listItemsElems = tasksList
  
    .sort((a, b) => a.done - b.done)
 
    .map(({ id, text, done }) => {
     
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      if (done === true) {
        listItemElem.classList.add('list__item_done');
      }
      
      const checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');
      checkboxElem.checked = done;
      checkboxElem.dataset.taskId = id;
      checkboxElem.classList.add('list__item-checkbox');
      checkboxElem.addEventListener('click', onCheckboxClick);
     
      listItemElem.append(checkboxElem, text);

      return listItemElem;
    });
  
  listElem.append(...listItemsElems);
};

const onCheckboxClick = event => {
  const taskId = event.target.dataset.taskId; 
  const task = tasks.find(task => task.id === taskId);
  task.done = !task.done; 
  renderTasks(tasks) 
};


const createTask = () => {
  const taskInputElem = document.querySelector('.task-input');
  const text = taskInputElem.value.trim();

  if (!text) return;

  const newTask = {
    id: String(Date.now()),
    text,
    done: false,
  }

  tasks.push(newTask);
  taskInputElem.value = '' 
  renderTasks(tasks)
};


const createBtnElem = document.querySelector('.create-task-btn');
createBtnElem.addEventListener('click', createTask);


renderTasks(tasks)
