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

// refactor ; combining async await with .resolves and .rejects

test("the data is cereal", async () => {
  await expect(fetchData()).resolves.toBe("cereal");
});

test("the fetch fails with an error", async () => {
  await expect(fetchData()).rejects.toBe("error");
});

test("the fetch fails with an error", () => {
  return fetchData().catch((e) => expect(e).toMatch("error"));
});

/* -------------------------------------------------------------------------------------------- */

// 3. Callbacks

test("the data is cereal", (done) => {
  function callback(error, data) {
    if (error) {
      done(error);
      return;
    }
    try {
      expect(data).toBe("cereal");
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
});
