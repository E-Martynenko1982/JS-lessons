const elemInput = document.querySelector('.text-input');

const inputHandler = () => {
  console.log(elemInput.value);
}

elemInput.addEventListener('change', inputHandler)