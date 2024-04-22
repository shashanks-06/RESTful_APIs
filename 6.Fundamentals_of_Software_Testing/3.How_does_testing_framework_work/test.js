import { test, expect } from "./testing-framework.js";
import { multiply, divide } from "./math.js";

export const divideTest = () => {
  const result = divide(10, 5);
  const expected = 2;

  expect(result).toBe(expected);
};
test("divide", divideTest);

export const multiplyTest = () => {
  const result = multiply(4, 5);
  const expected = 20;

  expect(result).toBe(expected);
};

test("multiply", multiplyTest);
