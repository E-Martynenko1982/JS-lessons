// 1
// assing new array apply method entires
// filter array with method filter setting a condition for item of array >= 18
// assign new array with map method of filtered array setting a condition of 0 index
// const getAdults = obj => Object.entries(obj).filter(item => item[1] >= 18).map(item => item[0])

// console.log(getAdults({ 'igor': 16, "fedir": 25, "olga": 22 }))

// copy

// const copyObj = obj => {
//   const copy = { ...obj };
//   return copy;
// };

// console.log(copyObj({ igor: 16, fedir: 25, olga: 22 }));

// print keys

// const getKeys = obj => Object.keys(obj).map(key => console.log(key));

// getKeys({ igor: 16, fedir: 25, olga: 22 })

// function addPropertyV1(userData, userId) {
//   userData.id = userId;
//   return userData;
// }

// const addPropertyV2 = (userData, userId) => Object.assign(userData, { id: userId });

// function addPropertyV3(userData, userId) {
//   const newObj = { ...userData }

//   Object.assign(newObj, { id: userId })
//   return newObj
// }

// function addPropertyV4(userData, userId) {
//   const newObj = {}

//   Object.assign(newObj, userData, { id: userId })
//   return newObj

// }

// merge objects

// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Bob',
//   student: false,
// };

// function mergeObjectsV1(obj1, obj2) {
//   return Object.assign(obj1, obj2);
// }

// function mergeObjectsV2(obj1, obj2) {
//   return Object.assign(obj2, obj1);
// }

// function mergeObjectsV3(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }

// console.log(mergeObjectsV3(obj1, obj2));

// get people

// get values of object(arrays of objects)
// arrays of objects concat with apply flat => one array of concated objects
// maping of array where get from each element(object) a value => arrays of values
// flat arrays to one array
// const rooms = {
//   room1: [
//     { name: 'Jack' },
//     { name: 'Dan' },
//     { name: 'Ivan' },
//   ],
//   room2: [
//     { name: 'Vasyl' },
//     { name: 'Petro' },

//   ],
// }

// const getPeople = obj => {
//   return Object.values(obj).flat().map(items => Object.values(items).flat()).flat()

// };

// console.log(getPeople(rooms))

// sum balance
// apply map method for acces to each element(object) of array. Then work with values of object amount
// apply reduce method for sum all values of key amount

// const dayTransactions = [
//   { userId: 22, amount: 60, operation: 'sell' },
//   { userId: 22, amount: 160, operation: 'buy' },
//   { userId: 44, amount: 90, operation: 'sell' },
// ];

// const getTotalRevenue = transactions => transactions.map(items => items.amount)
//   .reduce((acc, value) => acc + value, 0);

// console.log(getTotalRevenue(dayTransactions))

// computed property

// function addPropertyV1(obj, key, value) {

//   // eslint-disable-next-line no-param-reassign
//   obj[key] = value;
//   return obj;
// }


// function addPropertyV2(obj, key, value) {
//   // eslint-disable-next-line object-shorthand
//   return Object.assign(obj, { [key]: value });

// }


// function addPropertyV3(obj, key, value) {
//   const newObj = { ...obj }
//   return Object.assign(newObj, { [key]: value })
// }

function addPropertyV4(obj, key, value) {
  const newObj = { ...obj, [key]: value };
  return newObj
}

const transaction = {
  value: 170,
};

console.log(addPropertyV4(transaction, 'currency', 'USD'))
console.log(transaction)
