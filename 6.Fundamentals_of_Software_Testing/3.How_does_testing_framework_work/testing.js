function divide(a, b) {
  return a / b;
}

expect(divide(10, 5)).toBe(2);

function multiply(a, b) {
  return a * b;
}

expect(multiply(4, 5)).toBe(20);

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