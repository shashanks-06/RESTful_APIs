function divide(a, b) {
  return a / b;
}

const divideTest = () => {
  const result = divide(10, 5);
  const expected = 2;

  expect(result).toBe(expected);
};
test("divide", divideTest);

function multiply(a, b) {
  return a * b;
}

const multiplyTest = () => {
  const result = multiply(4, 5);
  const expected = 20;

  expect(result).toBe(expected);
};

test("multiply", multiplyTest);

function test(title, callback) {
  try {
    callback();
    console.log(`☑️ ${title}`);
  } catch (error) {
    console.error(`❎ ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
