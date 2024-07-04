const elemInput = document.querySelector('.text-input');

const inputHandler = (event) => {
  console.log(event.target.value)

};

elemInput.addEventListener("input", inputHandler);