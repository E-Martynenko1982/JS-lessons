const makePromise = number => {
  return new Promise((resolve, reject) => {
    resolve(number);
  })
};
makePromise(17).then(number => {
  console.log(number); // 17
});
