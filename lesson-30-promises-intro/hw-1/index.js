const userDataPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve({ name: 'Tom', age: 17 });
  }, 1000);
});
console.log(userDataPromise) //object

userDataPromise.then(function onSuccess(userData) {
  console.log(userData)

});

console.log(userDataPromise)


userDataPromise.then(function onSuccess(data) {
  console.log(`My name is ${data.name}. I am ${data.age} years old`)

});
