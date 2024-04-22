const { test, expect } = require("./testing-framework.js");
const { multiply, divide } = require("./math.js");

const divideTest = () => {
  const result = divide(10, 5);
  const expected = 2;

  expect(result).toBe(expected);
};
test("divide", divideTest);

const multiplyTest = () => {
  const result = multiply(4, 5);
  const expected = 20;

  expect(result).toBe(expected);
};

test("multiply", multiplyTest);

module.exports = { divideTest, multiplyTest };
