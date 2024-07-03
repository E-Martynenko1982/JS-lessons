export const manageClasses = () => {
  const elemLiOne = document.querySelector('.one');
  const elemLiTwo = document.querySelector('.two');
  const elemLiThree = document.querySelector('.three');
  const elemLiFour = document.querySelector('.four');

  elemLiOne.classList.add('selected');
  elemLiTwo.classList.remove('selected');
  elemLiThree.classList.toggle('three_done')
  elemLiFour.classList.contains('some-class') ? elemLiFour.classList.add('another-class') : null;
};
