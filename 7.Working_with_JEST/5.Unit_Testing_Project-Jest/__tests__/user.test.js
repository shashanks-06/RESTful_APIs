jest.mock("../request");

import * as user from "../user";

//The assertions for promise must be returned.

it("works with promises", () => {
  expect.assertions(1);
  return user.getUserName(4).then((data) => expect(data).toEqual("Mark"));
});

it("works with resolve", () => {
  expect.assertions(1);
  return expect(user.getUserName(5)).resolves.toEqual("Paul");
});

// async/await can be used.
it("works with async/await", async () => {
  expect.assertions(1);
  const data = await user.getUserName(4);
  expect(data).toEqual("Mark");
});

// async/await can also be used with `.resolves`
it("works with async/await and resolves", async () => {
  expect.assertions(1);
  await expect(user.getUserName(5)).resolves.toEqual("Paul");
});

//Testing for async errors using Promise.catch
it("tests errors with promises", () => {
  expect.assertions(1);
  return user.getUserName(2).catch((e) =>
    expect(e).toEqual({
      error: "User with 2 not found",
    })
  );
});

//Testing for async errors using async/await
it("tests errors with async/await", async () => {
  expect.assertions(1);
  try {
    await user.getUserName(1);
  } catch (e) {
    expect(e).toEqual({
      error: "User with 1 not found",
    });
  }
});

//Testing for async errors using `.rejects`
it("tests errors with rejects", () => {
  expect.assertions(1);
  return expect(user.getUserName(3)).rejects.toEqual({
    error: "User with 3 not found",
  });
});

//Testing for async/await using `.rejects`
it("tests errors with async/await and rejects", async () => {
  expect.assertions(1);

  await expect(user.getUserName(3)).rejects.toEqual({
    error: "User with 3 not found",
  });
});
