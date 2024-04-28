import { testFn } from ".";

describe("index tests", () => {
  it("Can run tests", () => {
    expect(testFn()).toEqual("Hello, world!");
  });
});
