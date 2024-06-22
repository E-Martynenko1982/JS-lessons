import { withdraw } from "./withDraw";

it('should get balance', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37)
})

it('should get -1', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 1500);
  expect(result).toEqual(-1)
})

it('should get balance', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 50);
  expect(result).toEqual(-1)
})