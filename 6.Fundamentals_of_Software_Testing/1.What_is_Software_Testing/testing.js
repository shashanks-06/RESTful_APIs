function multiply(a, b) {
  return a + b;
}

let result = multiply(4, 5);
let expected = 20;

expect(result).toBe(expected);

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
