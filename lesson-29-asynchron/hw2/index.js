export const requestUserData = (userId, callback) => {
  const delay = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  if (userId === 'broken') {
    window.setTimeout(() => {
      callback(null, 'Failed to load user data');
    }, delay(1000, 3000));
    return;
  }

  const data = {
    userId,
    email: `${userId}@example.com`
  };

  window.setTimeout(() => {
    callback(data, null);
  }, delay(1000, 3000));
};



// const userId = 'userid777';
// const brokenUserId = 'broken';
// const callback = (data, error) => {
//   if (error) {
//     console.log('Error:', error);
//   } else {
//     console.log('User data received:', data);
//   }
// };


// requestUserData('broken', callback)
