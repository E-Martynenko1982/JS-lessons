
const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList)
  return elementsList

};

getItemsList()
const getItemsArray = () => {
  const elementsArray = document.querySelectorAll(".tool");
  const nodeList = Array.from(elementsArray);
  console.dir(nodeList)
  return nodeList

};

getItemsArray()