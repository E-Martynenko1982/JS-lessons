export const squaredNumbers = () => {

  const elements = document.querySelectorAll('.number');
  elements.forEach(element => {

    element.dataset.squaredNumber = element.dataset.number ** 2
  })



};



