import { getEvenNumbers } from "./even";


it("should get even numbers", () => {
  const result = getEvenNumbers([4, 5, 8, 10]);
  expect(result).toEqual([4, 8, 10]);
});