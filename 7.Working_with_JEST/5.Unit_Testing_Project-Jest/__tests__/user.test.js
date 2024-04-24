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
