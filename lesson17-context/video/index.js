// const user = {

//   name: 'Doe',

//   sayHi(age, message) {
//     console.log(`${message}. I'm ${this.name}. I'm ${age} years old`)
//   }
// }


// user.getFullName()

// .bind()

// const func = user.getFullName.bind({ name: 'Tom' });
// func()

// call()

// const func = user.getFullName;
// func.call({ name: 'Petro' })

// apply()

// const func = user.sayHi;
// const anotherUser = {
//   name: 'Ivan'
// }

// func.apply(anotherUser, [17, 'Hello'])


// ----------------------------------------
// const callbackPrompt = {
//   message: 'Tell me your number',
//   showPrompt() {
//     const phoneNumber = prompt(this.message)
//     console.log(phoneNumber)

//   },
//   showDefferedPrompt(ms) {
//     setTimeout(this.showPrompt.bind(this), ms)
//   }
// }

// callbackPrompt.showDefferedPrompt(3000)

// -------------------------------------

// defer(func, ms) => Function;

function defer(func, ms) {
  return function () {
    setTimeout(() => func.call(this, ...arguments), ms);
  }
}

// const sayHi = () => {
//   console.log("Hi");

// };

// const sum = (a, b) => {
//   console.log(a + b);

// };

//const deferredSayHi = defer(sayHi, 1000);
// const deferredSum = defer(sum, 2000)
// deferredSum(4, 5)
//deferredSayHi()

const user = {
  name: 'Tom',
  sayHi() {
    console.log(`Hi, I'am ${this.name}`)

  }
}

const deferredHi = defer(user.sayHi, 2000)
deferredHi.call({ name: 'Bob' })