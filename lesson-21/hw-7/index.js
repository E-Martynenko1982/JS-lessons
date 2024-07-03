export const createButton = (buttonText) => {
  const bodyElem = document.querySelector('body')
  const buttonElem = document.createElement("button");
  buttonElem.textContent = buttonText;
  bodyElem.appendChild(buttonElem)
};
