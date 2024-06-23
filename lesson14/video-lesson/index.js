// let message = 'Just learn it'

// const sendMessage = (name) => {
//   sender = 'Gromcode'
//   console.log(`${name}, ${message}. Your ${sender}`)

// };

// sendMessage('Tom')


// function setMessage(text) {
//   message = text
// }

// setMessage('Hello')

// sendMessage('Tom')


const createMessenger = () => {
  let message = 'Hi';
  function sendMessage(name) {
    sender = 'Gromcode'
    console.log(`${name}, ${message}. Your ${sender}`)

  };

  function setMessage(text) {
    message = text
  };

  return {
    sendMessage,
    setMessage,
  }
};

const messenger = createMessenger();
messenger.sendMessage('Bob');

const messenger2 = createMessenger();

messenger2.sendMessage('Tom');
messenger2.setMessage('Hello')

messenger.sendMessage('Ann')