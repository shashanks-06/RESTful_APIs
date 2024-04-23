// Common Matchers

test("four plus for is eight", () => {
  expect(4 + 4).toBe(8);
});

test("object assignment", () => {
  const data = { three: 3 };
  data["four"] = 4;
  expect(data).toEqual({ three: 3, four: 4 });
});

test("adding positive number is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
