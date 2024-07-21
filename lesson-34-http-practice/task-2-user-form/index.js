const formElem = document.querySelector('.login-form');
const buttonElem = document.querySelector('.submit-button');

formElem.addEventListener(
  'email',
  () => {
    if (formElem.checkValidity()) {
      buttonElem.removeAttribute("disabled");
    }
  },
  false,
);




formElem.addEventListener('submit', event => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(formElem));

  fetch('https://6698d3872069c438cd7036bb.mockapi.io/api/V1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => {
      alert(JSON.stringify(data));
      formElem.reset();
      buttonElem.setAttribute('disabled', true);
    })
    .catch(error => {
      alert('An error occurred: ' + error.message);
    });
});
