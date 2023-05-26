const { isArray } = require("./isArray");

test("determines whether [] is an array", () => {
  expect(isArray([])).toBe(true);
});

test("determines whether 'Hello World' is an array", () => {
  expect(isArray("Hello World")).toBe(false);
});

//use "npx jest" in terminal to test
