const asyncValueWithDelay = (value, delay) => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(value)

    resolve(value);
  }, delay)
})

const sumNumbers = (numbers) => {
  return numbers
    .filter(number => !isNaN(number))
    .reduce((acc, number) => acc + Number(number), 0)
};

export const asyncSum = (...arrNum) => {
  return Promise.all(arrNum)
    .then(numbers => sumNumbers(numbers))
    .catch(() => Promise.reject(new Error('Can\'t calculate')));
};
