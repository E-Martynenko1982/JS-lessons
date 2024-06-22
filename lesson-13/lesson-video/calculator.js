// const calc = str => {
//   const [a, operator, b] = str.split(' ');
//   let result;

//   // eslint-disable-next-line default-case
//   switch (operator) {
//     // eslint-disable-next-line no-unused-expressions
//     case '+':
//       result = Number(a) + Number(b);
//       break;

//     case '-':
//       result = Number(a) - Number(b);
//       break;
//     case '*':
//       result = Number(a) * Number(b);

//       break;

//     case '/':
//       result = +a / +b;
//       break;
//   }
//   return `${str} = ${result}`;
// };

export const getSquaredNumbers = arr => arr.map(num => num * num);


export const getOddNumbers = arr => arr.filter(num => (num % 2 === 1));

export default (a, b) => a + b;
