
export const getTitle = () => {
  const result = document.querySelector('.title').textContent;
  return result
}
export const getDescription = () => document.querySelector('.about').innerText


export const getPlans = () => document.querySelector('.plans').innerHTML

export const getGoal = () => document.querySelector('.goal').outerHTML


