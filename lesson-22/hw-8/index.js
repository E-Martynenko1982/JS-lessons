const elemCheckbox = document.querySelector('.task-status');



const checkboxHandler = (event) => {

  event.target.checked ? console.log(true) : console.log(false);

}

elemCheckbox.addEventListener('change', checkboxHandler);