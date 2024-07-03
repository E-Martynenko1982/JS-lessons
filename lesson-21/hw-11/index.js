export const squaredNumbers = () => {

  document.querySelectorAll('.number');
  elements.forEach(element => {

    element.dataset.squaredNumber = element.dataset.number ** 2
  })



};

squaredNumbers()

