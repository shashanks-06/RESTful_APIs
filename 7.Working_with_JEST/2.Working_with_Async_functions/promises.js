// 1. Promises

test("the data is cereal", () => {
  return fetchData().then((data) => {
    expect(data).toBe("cereal");
  });
});
