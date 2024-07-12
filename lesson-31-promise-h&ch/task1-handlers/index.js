export const requestUserData = userId => {
  
  return new Promise((resolve, reject) => {
    
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error("User not found"));
      }, 500);
    } else {
      
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          userId: userId,
          email: `${userId}@example.com`
        });
      }, 1000);
    }
  });
};
   
 
requestUserData('user123')
  .then(data => {
    console.log('User data:', data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  })
  .finally(() => {
    console.log('finally')
    
  })

requestUserData('broken')
  .then(data => {
    console.log('User data:', data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });