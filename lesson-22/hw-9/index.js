const btnElem = document.querySelectorAll('.pagination__page');

const handleClick = (event) => {
  console.log(event.target.attributes[1].value)

};

btnElem.forEach(elem => {
  elem.addEventListener("click", handleClick,)
})