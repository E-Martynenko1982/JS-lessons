const arr = [0];
console.log(arr.length);



// in - arr, out - new arr
// apply filter method wich in - element of the arr, out-boolean: if true - element stay still in  new arr
// const getFiniteNumbers = arr => arr.filter(item => Number.isFinite(item));

// console.log(getFiniteNumbers([1, 4, 1.24, '12', null])) // => [1, 4, 1.24]

// this method reform value of each index arr to number and check if it is final number

// const getFiniteNumbersV2 = arr => arr.filter(item => isFinite(item));
// ;
// console.log(getFiniteNumbersV2([1, 4, 1.24, '12', null]));

// const getNaN = arr => arr.filter(item => Number.isNaN(item));

// console.log(getNaN([1, 4, 1.24, '12', null, NaN, Infinity]));

// const getNaNV2 = arr => arr.filter(item => isNaN(item));

// console.log(getNaNV2([1, 4, 1.24, '12', null, NaN, Infinity]));

// --------------------
// const getIntegers = arr => arr.filter(item => Number.isInteger(item));

// console.log(getIntegers([1, 4, 1.24, '12', null, NaN, Infinity]));

// --------------------

// eslint-disable-next-line radix
// const getParsedIntegers = arr => arr.map(item => Number.parseInt(item));

// console.log(getParsedIntegers([12.377, 5, 6, 17.6, null]));

// // eslint-disable-next-line radix
// const getParsedIntegersV2 = arr => arr.map(item => parseInt(item));

// console.log(getParsedIntegersV2([12.377, 5, 6, 17.6, null]));

// const getParsedFloats = arr => arr.filter(item => Number.parseFloat(item));

// console.log(getParsedFloats([12.377, 5, 6, 17.6, null]));

// const getParsedFloatsV2 = arr => arr.filter(item => parseFloat(item));

// console.log(getParsedFloatsV2([12.377, 5, 6, 17.6, null]));

// --------------------
// const multiRound = num => {
//   return [
//     Math.floor(num * 100) / 100,  // Округление вниз до двух знаков после запятой
//     Math.trunc(num * 100) / 100,  // Отсечение дробной части до двух знаков после запятой
//     Math.ceil(num * 100) / 100,   // Округление вверх до двух знаков после запятой
//     Math.round(num * 100) / 100,   // Округление до ближайшего целого до двух знаков после запятой
//     +num.toFixed(2)                // Преобразование в строку с двумя знаками после запятой и обратно в число
//   ]
// };

// console.log(multiRound(11.12556))
// --------------------
// absolute max number
// 1-get absolute values apply map method
// get max value apply Math.max to new array wich will be spreaded
// const getMaxAbsoluteNumber = arr => {
//   if (!Array.isArray(arr) || arr.length === 0) {
//     return null
//   }
//   const absoluteNumbers = arr.map(item => Math.abs(item));
//   return Math.max(...absoluteNumbers);
// };

// console.log(getMaxAbsoluteNumber([-6, 3, 5, -1]))

// --------------------
//
// const getTotalPrice = arr => {

//   const result = arr.reduce((acc, item) => acc + item, 0)
//   return '$' + Math.floor(result * 100) / 100
// }

// console.log(getTotalPrice([-6.2456, 3.567, 5, -1]))

// --------------------
// check if from > to

// assign func wich generate random integer numbers
// assign func with interval and arr length
// check presence of integer number in interval
// round arguments from and to to integer numbers with methods ceil and floor
// check integered numbers minint > maxint => return null if false
// assign new array with length from argument apply constructor new Array and fill it with method fill undefined elements
// apply method map to change elements of arr to random numbers with func getRandomint

// const getRandomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// // eslint-disable-next-line consistent-return
// const getRandomNumbers = (length, from, to) => {
//   if (from > to) {
//     return null
//   }

//   const minInt = Math.ceil(from);
//   const maxInt = Math.floor(to);

//   if (minInt > maxInt) {
//     return null
//   }
//   const randomIntegers = new Array(length).fill()

//   return randomIntegers.map(() => getRandomInt(minInt, maxInt))

// }

// console.log(getRandomNumbers(5, 1.4, 3.22))

// --------------------

const superRound = (num, prec) => {
  return [
    Math.floor(num * 10 ** prec) / 10 ** prec,
    Math.trunc(num * 10 ** prec) / 10 ** prec,
    Math.ceil(num * 10 ** prec) / 10 ** prec,
    Math.round(num * 10 ** prec) / 10 ** prec,
    +num.toFixed(prec),
  ];
};

console.log(superRound(6.11, 3))
