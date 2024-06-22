import { reverseArray } from './reverseArr';

it('should get reverse array', () => {
  const result = reverseArray([1, 2, 3]);
  expect(result).toEqual([3, 2, 1])
})

it('should get null', () => {
  const result = reverseArray('1, 2, 3');
  expect(result).toEqual(null)
})

it('should reverse array', () => {
  const result = reverseArray(['a', 'b', 35]);
  expect(result).toEqual([35, 'b', 'a'])
})