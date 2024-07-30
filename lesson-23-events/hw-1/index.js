// Цей масив використовується зберігання всіх завдань. Кожне завдання представлене об'єктом із полями
// 'id', 'text' 'done'
const tasks = [
  {
    id: 1,
    text: 'Test a car',
    done: false,
  },
  {
    id: 2,
    text: 'Swim in river',
    done: false,
  },
  {
    id: 3,
    text: 'Dinner with wife',
    done: false,
  },
  {
    id: 4,
    text: 'Learn task with Gromcode',
    done: true,
  },
  {
    id: 5,
    text: 'Take a hour of english lesson',
    done: true,
  }
];


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
  const taskId = +event.target.dataset.taskId; // отримання ід задачі
  const task = tasks.find(task => task.id === taskId);// пошук задачі по ід
  task.done = !task.done; // перемикання стану задачі
  renderTasks(tasks) //повторне оновлення задач
};



// Ця функція створює нове завдання і додає її до масиву завдань при натисканні на кнопку "Create".
const createTask = () => {
  const taskInputElem = document.querySelector('.task-input');
  const text = taskInputElem.value.trim();// отримання значень вводу без пробілів

  if (!text) return;// перевірка що поле не пусте

  const newTask = {// створення нової задачі
    id: String(Date.now()),// замість ід  - поточна дата
    text,
    done: false,
  }

  tasks.push(newTask);// додавання задачі в масив
  taskInputElem.value = '' // очистка поля вводу
  renderTasks(tasks) // повторний рендеринг списку
};

// Додавання обробника події на кнопку Create. При натисканні на кнопку викликається функція createTask.
const createBtnElem = document.querySelector('.create-task-btn');
createBtnElem.addEventListener('click', createTask);//

// Виклик функції renderTasks для початкового рендерингу списку завдань, навіть якщо він порожній
renderTasks(tasks)