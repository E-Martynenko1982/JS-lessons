'use strict';
// const user = {
//   name: 'Tom',
//   sayHi() {
//     console.log(this.name)

//   }
// }

// const func = user.sayHi
// func()

// setTimeout(() => user.sayHi(), 2000);

// -------------------------------

// const invite = {
//   guests: [
//     { name: "Tom", email: "t@gmail.com", age: 17 },
//     { name: "Bob", email: "b@gmail.com", age: 18 },
//   ],
//   message: 'Wellcome to the party',
//   getInvintations() {
//     return this.guests
//       .filter(({ age }) => age >= 18)
//       .map(({ name, email }) => ({
//         text: `Hi ${name}. ${this.message}`,
//         email
//       }));
//   },
// }

// console.log(invite.getInvintations())


// ------------------------------

// const wallet = {
//   transactions: [1, 5, 78, 455],
//   getMax() {
//     return Math.max.apply(null, this.transactions)
//   },
//   getMin() {
//     return Math.min.apply(null, this.transactions)
//   },
// }

// const wallet = {
//   transactions: [1, 5, 78, 455],
//   getMax() {
//     return Math.max.apply(...this.transactions)
//   },
//   getMin() {
//     return Math.min.apply(...this.transactions)
//   },
// }




// --------------------------

function func() {
  // return [].reduce.apply(arguments, [(acc, elem) => {
  //   return acc + elem
  // }, 0])
  return [].reduce.call(arguments, (acc, elem) => {
    return acc + elem
  }, 0)
}


console.log(arr1(1, 2, 3, 4))


