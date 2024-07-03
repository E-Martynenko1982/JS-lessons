
const getTitle = () => document.querySelector('.title').textContent
console.dir(getTitle())

const getDescription = () => document.querySelector('.about').innerText
console.dir(getDescription())

const getPlans = () => document.querySelector('.plans').innerHTML

const getGoal = () => document.querySelector('.goal').outerHTML
console.dir(getGoal())

