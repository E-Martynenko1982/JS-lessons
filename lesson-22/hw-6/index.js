const elemBtn = document.querySelectorAll('.btn');

const handleClick = (event) => {
  console.log(event.target.textContent)
};


elemBtn.forEach((btn) => {
  btn.addEventListener("click", handleClick);
})