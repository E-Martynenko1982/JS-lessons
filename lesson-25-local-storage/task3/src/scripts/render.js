const listElem = document.querySelector('.list');
const compareTasks = (a, b) => {
  if (a.done !== b.done) {
    return a.done - b.done;
  }
  return a.text.localeCompare(b.text);
}

const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement("input");
  checkboxElem.setAttribute("type", "checkbox");
  checkboxElem.setAttribute('data-id', id);
  checkboxElem.checked = done;
  checkboxElem.classList.add("list__item-checkbox");
  return checkboxElem;
}

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement("li");
  listItemElem.classList.add("list__item");
  const checkboxElem = createCheckbox({ done, id });
  if (done) {
    listItemElem.classList.add("list__item_done");
  }
  listItemElem.appendChild(checkboxElem, text);
  return listItemElem;
}

export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];
  listElem.innerHTML = '';
  const tasksElem = tasksList
    .sort(compareTasks)
    .map(createListItem);
  listElem.append(...tasksElem)
}