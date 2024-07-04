const eventsList = document.querySelector('.events-list');
const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const clearBtn = document.querySelector('.clear-btn');
const onHandlers = document.querySelector('.attach-handlers-btn');
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');


const logTarget = (text, color) => {
  eventsList.innerHTML += `<span style='color: ${color}; margin-left: 8px'>${text}</span>`
};

const clearList = () => eventsList.innerHTML = '';
clearBtn.addEventListener('click', clearList);




const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'Span', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'Span', 'grey');


const attachHandlers = () => {
  divElem.addEventListener("click", logGreyDiv, { capture: true });
  divElem.addEventListener("click", logGreenDiv);

  pElem.addEventListener("click", logGreyP, true);
  pElem.addEventListener("click", logGreenP);

  spanElem.addEventListener('click', logGreySpan, true);
  spanElem.addEventListener('click', logGreenSpan);
}

const removeHandlers = () => {
  divElem.removeEventListener('click', logGreyDiv, { capture: true });
  divElem.removeEventListener('click', logGreenDiv);

  pElem.removeEventListener('click', logGreyP, { capture: true });
  pElem.removeEventListener('click', logGreenP);

  spanElem.removeEventListener('click', logGreySpan, { capture: true });
  spanElem.removeEventListener('click', logGreenSpan);
}

onHandlers.addEventListener('click', attachHandlers);
removeHandlersBtn.addEventListener("click", removeHandlers)

attachHandlers();