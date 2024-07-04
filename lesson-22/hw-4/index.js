const elemBtnSearch = document.querySelector(".search__btn");
const elemInput = document.querySelector(".search__input");


const searchHandler = () => {
  console.log(elemInput.value);

}

elemBtnSearch.addEventListener("click", searchHandler);