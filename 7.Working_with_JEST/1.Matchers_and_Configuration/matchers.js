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

/* -------------------------------------------------------------------------------------------- */

//Truthyness

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

/* -------------------------------------------------------------------------------------------- */

//Numbers

test("two plus two", () => {
  const value = 2 + 2;

  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);

  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test("adding floating point numbers", () => {
  const value = 0.2 + 0.3;

  expect(value).toBe(0.5); // This doesn't works because of rounding errors

  expect(value).toBeCloseTo(0.5); // This works.
});
