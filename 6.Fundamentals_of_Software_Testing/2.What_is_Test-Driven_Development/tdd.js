function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
expect(add(4, 3)).toBe(7);

function add(a, b) {
  return a + b;
}
