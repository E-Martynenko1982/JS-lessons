// Цей масив використовується зберігання всіх завдань. Кожне завдання представлене об'єктом із полями
// 'id', 'text' 'done'
const tasks = [];

// Функція renderTasks приймає масив завдань (tasksList) та відображає їх у вигляді списку на сторінці.

const renderTasks = tasksList => {
  const listElem = document.querySelector(".list");
  listElem.innerHTML = "";// очистка списку перед повторним рендерингом

  const listItemsElems = tasksList
    //сортування - невиконані таски ідуть перші
    .sort((a, b) => a.done - b.done)
    // створює елементи списку для кожного завдання
    .map(({ id, text, done }) => {
      // створюємо елементи списку і додаємо для них класи з перевіркою якщо статус done-true то навішуємо інший класс для елементів що зроблені(зачеркнуті)
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      if (done === true) {
        listItemElem.classList.add('list__item_done');
      }
      // створення і налаштування чекбокса
      const checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');
      checkboxElem.checked = done;
      checkboxElem.dataset.taskId = id;
      checkboxElem.classList.add('list__item-checkbox');
      checkboxElem.addEventListener('click', onCheckboxClick);
      // додавання чекбокса і тексту задачі в елемент списку
      listItemElem.append(checkboxElem, text);

      return listItemElem;
    });
  // додає всі створені елементи до списку на сторінці.
  listElem.append(...listItemsElems);
};
// Ця функція перемикає стан завдання (виконана/невиконана) при натисканні на чекбокс
const onCheckboxClick = event => {
  const taskId = event.target.dataset.taskId; // отримання ід задачі
  const task = tasks.find(task => task.id === taskId);// пошук задачі по ід
  task.done = !task.done; // перемикання стану задачі
  renderTasks(tasks) //повторне оновлення задач
};

