export const asyncCalculator = number => {
  return new Promise((resolve, reject) => {
    if (number === 5) {
      setTimeout(() => {
        console.log(`Initial value: ${number}`);
        resolve(number);
      }, 500); 
    } else {
      reject(new Error("Number is not 5"));
    }
  });
};

asyncCalculator(5)
  .then(data => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Squared value: ${data * data}`);
        resolve(data * data);
      }, 1000);
    });
  })
  .then(data => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Doubled value: ${data * 2}`);
        resolve(data * 2);
      }, 0)
    });
  })
  .catch(error => {
    console.error(error.message);
  });

