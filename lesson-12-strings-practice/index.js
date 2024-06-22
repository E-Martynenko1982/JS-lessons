/* eslint-disable no-unused-expressions */
/* eslint-disable default-case */

// func: in-string, out-string + number
// apply switch case fo operating with elements of array a
const calc = (str) => {
  // eslint-disable-next-line prefer-const
  // const a = str.split(' ');
  // let result;

  // switch (a[1]) {
  //   case '-':
  //     result = Number(a[0]) - Number(a[2]);
  //     break;

  //   case '+':
  //     result = +a[0] + +a[2];
  //     break;

  //   case '*':
  //     result = +a[0] * +a[2];
  //     break;
  //   case '/':
  //     result = +a[0] / +a[2];
  //     break;
  // }


  // return str + ' = ' + result;
  const [a, operator, b] = str.split(' ');
  let result;

  switch (operator) {
    // eslint-disable-next-line no-unused-expressions
    case '+':
      result = Number(a) + Number(b);
      break;

    case '-':
      result = Number(a) - Number(b);
      break;
    case '*':
      result = Number(a) * Number(b);

      break;

    case '/':
      result = +a / +b;
      break;
  }
  return `${str} = ${result}`
};

console.log(calc(('16 ** 4')))
