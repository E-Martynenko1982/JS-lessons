const elemCheckbox = document.querySelector('.task-status');



const checkboxHandler = () => {
  elemCheckbox.checked ? console.log(true) : console.log(false);


}

elemCheckbox.addEventListener('change', checkboxHandler);