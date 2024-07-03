export const finishForm = () => {
  const formElem = document.querySelector('.login-form');
  const inputElem = document.createElement('input');
  const inputElemChangeType = document.querySelector('input[name="password"]');
  inputElem.type = "text";
  inputElem.name = 'login';
  formElem.prepend(inputElem);
  inputElemChangeType.type = 'password'

};

