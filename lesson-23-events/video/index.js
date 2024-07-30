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
    // Метод map создает новый массив, применяя каждый валидатор к значению value. В результате получается массив строк, каждая из которых либо undefined (если проверка прошла успешно), либо содержит текст ошибки (если проверка не прошла).

    // Например, если value равно пустой строке, массив может выглядеть так: 
    // ["Required", "Should be a valid email"]
    .filter(errorText => errorText)
    // Метод filter создает новый массив, включающий только те элементы, для которых функция обратного вызова возвращает true. В данном случае функция обратного вызова — это errorText => errorText.

    // Если errorText содержит текст ошибки(например, "Required" или "Should be a valid email"), он считается истинным значением и остается в массиве.Если errorText равно undefined, оно считается ложным и отбрасывается.
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

// виводимо alert зі значенням полів форми


const formElem = document.querySelector(".login-form");

const onFormSubmit = event => {
  event.preventDefault();
  const formData = [...new FormData(formElem)]
    .reduce((acc, [field, value]) => ({ ...acc, [field]: value }), {});
  alert(JSON.stringify(formData));
}

formElem.addEventListener("submit", onFormSubmit);
