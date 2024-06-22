import { calc } from "./calculator";

it("should  a + b", () => {
  const result = calc("1 + 2");
  expect(result).toEqual("1 + 2 = 3")
})

it("should  a - b", () => {
  const result = calc("8 - 3");
  expect(result).toEqual("8 - 3 = 5")
})

it("should  a * b", () => {
  const result = calc("1 * 2");
  expect(result).toEqual("1 * 2 = 2")
})

it("should  a / b", () => {
  const result = calc("10 / 5");
  expect(result).toEqual("10 / 5 = 2")
})

it("should  null", () => {
  const result = calc(1 + 2);
  expect(result).toEqual(null)
})