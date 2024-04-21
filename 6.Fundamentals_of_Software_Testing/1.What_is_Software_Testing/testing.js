function multiply(a, b) {
  return a + b;
}

expect(multiply(4, 5)).toBe(20);

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
