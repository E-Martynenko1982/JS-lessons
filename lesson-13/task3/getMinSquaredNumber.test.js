import getMinSqNum from "./getMinSquaredNumber";

it("should get null", () => {
  const result = getMinSqNum([]);
  expect(result).toEqual(null);
});

it("should get null", () => {
  const result = getMinSqNum('-2, 5, 7');
  expect(result).toEqual(null);
});

it("should get squared min number", () => {
  const result = getMinSqNum([4, 5, -12, -3, -2]);
  expect(result).toEqual(4);
});