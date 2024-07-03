export const finishList = () => {
  const ulElem = document.querySelector('.list')
  const fiveLiElem = document.querySelector(".special")
  const firstLiElem = document.createElement('li')
  const eightLiElem = document.createElement("li")
  const fourLiElem = document.createElement("li")
  const sixLiElem = document.createElement("li")

  fourLiElem.textContent = 4
  sixLiElem.textContent = 6
  eightLiElem.textContent = 8
  firstLiElem.textContent = 1

  ulElem.prepend(firstLiElem)
  ulElem.appendChild(eightLiElem)
  fiveLiElem.before(fourLiElem)
  fiveLiElem.after(sixLiElem)
};

