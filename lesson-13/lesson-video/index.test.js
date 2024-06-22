// it('17 и в Африке 17', () => {
//   expect(17).toEqual(17);
// });

// const getEvenNumbers = numbers => {
//   return numbers.filter(num => (num % 2 == 0));
// };

// it("should get only even numbers of array", () => {
//   const result = getEvenNumbers([1, 2, 3, 4, 5, 6]);
//   expect(result).toEqual([2, 4, 6]);
// })

import Sum, { getSquaredNumbers, getOddNumbers } from './calculator';

it("should get squared numbers", () => {
  const result = getSquaredNumbers([4, 5]);
  expect(result).toEqual([16, 25]);
});

it("should get odd numbers", () => {
  const result = getOddNumbers([4, 5, 7]);
  expect(result).toEqual([5, 7]);
});

it("should get sum", () => {
  const result = Sum(5, 7);
  expect(result).toEqual(12);
})