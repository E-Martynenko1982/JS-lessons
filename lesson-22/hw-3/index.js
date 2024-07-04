const elemCheckbox = document.querySelector('.task-status');
console.log(elemCheckbox.checked);


const checkboxHandler = () => {
  elemCheckbox.checked ? console.log(true) : console.log(false);


}

elemCheckbox.addEventListener('change', checkboxHandler);