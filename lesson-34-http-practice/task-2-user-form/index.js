const formElem = document.querySelector('.login-form');
const submitElem = document.querySelector('.submit-button');
formElem.addEventListener('input', () => {
  if (formElem.checkValidity()) {
    submitElem.removeAttribute('disabled');
  } else {
    submitElem.setAttribute('disabled', true);
  }
});

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
      submitElem.setAttribute('disabled', true);
    })
    .catch(error => {
      alert('An error occurred: ' + error.message);
    });
});
