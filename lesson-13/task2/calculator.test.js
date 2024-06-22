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