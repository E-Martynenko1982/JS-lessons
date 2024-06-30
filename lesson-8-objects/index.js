/* eslint-disable no-restricted-syntax */
// 1
// apply reduce method
// const transformToObject = arr => {
//   return arr.reduce((acc, value) => {
//     acc[value] = value;
//     return acc;
//   }, {});
// };

// const { find } = require("slick/finder");

// console.log(transformToObject(['a', 17.1, 'John Doe']))

// 2
// for in
// announce variable with empty arr
// sort through obj apply for in and push values on array

// const concatProps = obj => {
//   // eslint-disable-next-line no-restricted-syntax, guard-for-in
//   const arr = [];

//   // eslint-disable-next-line guard-for-in
//   for (const key in obj) {
//     arr.push(obj[key]);
//   }

//   return arr;
// };

// console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' }));

// const transaction = {
//   currency: 'USD',
//   'value': 170,
//   operation: 'sale',
//   agent: {
//     country: 'Ukraine',
//     'company': 'NYSE',
//   },
//   'operation time': 1584029990001,
// };

// /* 1. Выведи в консоль значение свойства 'currency' с помощью точки */
// console.log(transaction.currency);
// /* 2. Выведи в консоль значение свойства 'value' с помощью квадратных скобок */
// // eslint-disable-next-line no-undef
// console.log(transaction['value']);
// const key = 'operation';
// // /* 3. Выведи в консоль значение свойства обьекта transaction, название которого находится в переменной key - используй квадратные скобки */
// console.log(transaction[key]);
// // /* 4. Введи в консоль значение свойства 'company' используя квадратные скобки */
// console.log(transaction.agent['company']);
// // /* 5. Выведи в консоль значение свойства 'country' используя точку */
// console.log(transaction.agent.country)
// // /* 6. Выведи в консоль значение свойства 'operation time' используя квадратные скобки */
// console.log(transaction['operation time']);

// const user = {
//   name: 'Tom',
//   age: 17,
// };
// const anotherKey = 'married';
// user[anotherKey] = false;
// user.hobby = 'football';

// user['favorite music'] = 'rock';

// user['address'] = {};

// user['address']['country'] = 'Ukraine';
// user['address']['building'] = 17;
// console.log(user);

// getKeys
// apply for in

// const getKeys = obj => {
//   for (const key in obj) {
//     console.log(key);

//   }

// };

// getKeys({ age: 13, name: 'Igor' })

// pickProps
// apply for in with check array for includes elements which have be in object
// than assign to newObj filtered elements from argument object
// const pickProps = (obj, props) => {
//   const newObj = {};

//   for (const key in obj) {
//     if (props.includes(key)) {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// };

// console.log(pickProps({ a: 1, b: 2, c: 3 }, ['g', 'u']));


// getAdults
// apply for in method with check element of object and assing it in new object
// then return new object
// const getAdults = obj => {

//   const result = {}

//   for (const key in obj) {
//     if (obj[key] >= 18) {
//       result[key] = obj[key]
//     }
//   }
//   return result
// }

// console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }))
// ==> { 'John Doe': 19, Bob: 18 }

// const o1 = { a: 1 };
// const o2 = { b: 2 };
// const o3 = { c: 3 };
// const arr = [o1, o2, o3];

// const obj = Object.assign({}, ...arr);
// console.log(obj)

// console.log(o1)
function countPositivesSumNegatives(input) {
  let countPositives = 0;
  let sumNegatives = 0;

  for (let index = 0; index < input.length; index++) {
    if (input[index] > 0) {
      countPositives++;
    } else if (input[index] < 0) {
      sumNegatives += input[index];
    }
  }

  return [countPositives, sumNegatives];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
