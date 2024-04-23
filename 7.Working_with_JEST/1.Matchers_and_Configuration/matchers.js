// 1. Common Matchers

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

/* ============================================================================================ */

// 2. Truthyness

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

/* ============================================================================================ */

// 3. Numbers

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

/* ============================================================================================ */

// 4. Strings

test("learning Jest is fun", () => {
  expect("Jest").not.toMatch(/boring/);
});

test("testing a test", () => {
  expect("testing").toMatch(/ing/);
});

/* ============================================================================================ */

// 5. Arrays and Iterables

const shoppingList = ["bananas", "tissues", "cereals", "cheese", "milk"];

test("the shopping list has cheese on it", () => {
  expect(shoppingList).toContain("cheese");
  expect(new Set(shoppingList)).toContain("cheese");
});

/* ============================================================================================ */

// 6. Exceptions

function compileAndroidCode() {
  throw new Error("you are using the wrong JDK");
}

//Note:-> the function that throws an exception needs to be invoke in wrapping function otherwise throw assertion will fail. So thats why anonymouse function `() => ` is used.

test("compiling android goes as expected", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});

/* ============================================================================================ */

// 7. Setup and Teardown

// 1. Repeating Setup

beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

/* ------------------------------------------------------------------------------------------- */

// 2. One Time Setup

beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

/* ------------------------------------------------------------------------------------------- */

// 3. Scoping

// Applies to all tests in this file

beforeEach(() => {
  return initializeCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

describe("matching city to foods", () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeFoodDatabase();
  });

  test("Vienna <3 Veal", () => {
    expect(isValidCityFoodPair("Vienna", "Weiner Schnitzel")).toBe(true);
  });

  test("San Juan <3 Plantains", () => {
    expect(isValidCityFoodPair("San Juan", "Mofongo")).toBe(true);
  });
});

/* ------------------------------------------------------------------------------------------- */

// 4. Order of Execution

describe("describe outer", () => {
  console.log("describe outer - a");

  describe("describe inner 1", () => {
    console.log("describe inner 1");

    test("test 1", () => console.log("test 1"));
  });

  console.log("describe outer - b");

  test("test 2", () => console.log("test 2"));

  describe("describe inner 2", () => {
    console.log("describe inner 2");

    test("test 3", () => console.log("test 3"));
  });

  console.log("describe outer - c");
});

/*
Output: 
        describe outer - a
        describe inner 1
        describe outer - b
        describe inner 2
        describe outer - c
        test 1
        test 2
        test 3
*/
