// 1. Promises

test("the data is cereal", () => {
  return fetchData().then((data) => {
    expect(data).toBe("cereal");
  });
});

/* -------------------------------------------------------------------------------------------- */

// 2. Async/Await

test("the data is cereal", async () => {
  const data = await fetchData();
  expect(data).toBe("cereal");
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (err) {
    expect(err).toMatch("error");
  }
});
