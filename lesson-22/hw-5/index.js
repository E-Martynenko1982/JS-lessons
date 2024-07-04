const elemButton = document.querySelector('.single-use-btn');

const buttonHandler = () => {
  console.log('clicked')
  elemButton.removeEventListener("click", buttonHandler);
}

elemButton.addEventListener("click", buttonHandler);
