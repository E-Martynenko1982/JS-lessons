/* eslint-disable no-param-reassign */
// 1)
// filter method with apply division remainder on three
// in-arr, out-newArr
// apply arrow func

// const getSpecialNumbers = (arr) => arr.filter(num => num % 3 === 0);
// console.log(getSpecialNumbers([5, 15, 9]))

// 2)
// sort method
// in-arr, out-newArr
// 1st -slice method for copy
// 2nd-apply sort method  with callback(comparison function): from greatest to smallest num
// return newArr
// apply arrow func for shortest write code

// const sortDesc = (arr) => arr.slice().sort((a, b) => b - a)
// console.log(sortDesc([40, 1, 5, 200]))

// 3)
// flat method + sort with callback(comparison function): from smallest  to  greatest num
// in-arr, out-newArr

// const flatArray = arr => arr.flat().sort((a, b) => a - b);

// console.log(flatArray([7, 2, 16, [4, 33], [6, 7], 22,]))

// 4)
// filter all students and ignore passed: allStudentsList.filter
// find passed students:!studentsForRetake.includes(student)
// apply message for new arr .map(student => `Good job, ${student}`)

// const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
//   return allStudentsList.filter(student => !studentsForRetake.includes(student)).map(student => `Good job, ${student}`)
// };

// const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
// const retakeStudTest1 = ['John', 'Mike'];
// console.log(getMessagesForBestStudents(allStudTest1, retakeStudTest1))

//   ; // ===> ['Good job, Den', 'Good job, Ann']

// 5)
// check array for isArray and return null if argument is not array(constructor if)
// apply reduce for pow elements to 2

// function squareArray(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return arr.map(elem => elem ** 2);
// }

// console.log(squareArray([2, 4, 5]));

// 6
// check array for isArray and return null if argument is not array(constructor if)
//
// map filtered array with callback wich will be increase a number by a given variable delta
// Before incrementing, the element must pass a parity check using if
// const increaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return arr.map(item => {
//     if (item % 2 === 0) {
//       return item + delta;
//     }
//     return item;
//   })
// }

// console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));

// 7
// check array for isArray and return null if argument is not array(constructor if)
// using the spread construction, assign a new array to a constant newArr

// const cloneArr = arr => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   const newArr = [...arr];

//   return newArr
// }

// console.log(cloneArr([1, 2, 3, 4, 5, 6]))

// 8

// apply indexOf method find client in clients array(use auxiliary variable)
// check if the client exists in the array
// check if there are enough funds in the account
// we return the account balance minus amount
// eslint-disable-next-line consistent-return

// const balances = [1400, 87, -6]

// function withdraw(clients, balances, client, amount) {
//   const clientIndex = clients.indexOf(client);
//   if (clientIndex === -1) {
//     return -1;
//   }
//   if (balances[clientIndex] < amount) {
//     return -1;
//   }

//   // eslint-disable-next-line no-return-assign
//   return (balances[clientIndex] -= amount);
// }

// console.log(withdraw(['Ann', 'John', 'User'], balances, 'John', 50));
// console.log(balances);


// 9
// check array for isArray and return null if argument is not array(constructor if)
// apply reduce method for sum of elements arr, 0 - first iterated number

// const sum = arr => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return arr.reduce((acc, item) => acc + item, 0);

// };

// console.log(sum([2, 5, 6, 3, 0, 3, -1]));


// 10
// apply method filter and operator &&
// const filterNames = (arr, text) => arr.filter(item => item.length > 5 && item.includes(text));


// console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'))

// 11
// check array for isArray and return null if argument is not array(constructor if)
// apply reduce method with expression of sum numbers(elements) of array divided on array.length-1

// const arrAverage = arr => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return arr.reduce((acc, item) => acc + item / arr.length, 0);
// }

// console.log(arrAverage([2, 5, 6, 3]))

// 12
// check array for isArray and return null if argument is not array(constructor if)
// apply reverse method with spred function method

// const reverseArray = arr => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return [...arr].reverse();
// }

// console.log(reverseArray([1, 2, 3]));



