const emailInputElement = document.querySelector("#email");
const passwordInputElement = document.querySelector("#password");

const emailErrorElem = document.querySelector(".error-text_email");
const passwordErrorElem = document.querySelector(".error-text_password");

const isRequired = value => value ? undefined : 'Required';
const isEmail = value => value.includes('@') ? undefined : 'Should be an email';

const validatorsByField = {
  email: [isRequired, isEmail],
  password: [isRequired],
}
const validate = (fieldName, value) => {
  const validators = validatorsByField[fieldName];
  return validators
    .map(validator => validator(value))
    .filter(errorText => errorText)
    .join(", ");

};

const onEmailChange = (event) => {
  const errorText = validate("email", event.target.value);
  emailErrorElem.textContent = errorText;
};

const onPasswordChange = (event) => {
  const errorText = validate("password", event.target.value);
  passwordErrorElem.textContent = errorText;
};
emailInputElement.addEventListener("input", onEmailChange)
passwordInputElement.addEventListener("input", onPasswordChange)