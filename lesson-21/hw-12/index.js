export const getSection = (num) => {
  const elemSpan = document.querySelector(`span[data-number='${num}']`)
  if (elemSpan && elemSpan.closest('.box')) {

    return elemSpan.closest('.box').dataset.section;
  }


};


