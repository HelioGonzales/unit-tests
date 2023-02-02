const omit = require("../src/omit");

test("creates an object composed of the own and inherited enumerable property", () => {
  expect(omit({ a: 1, b: "2", c: 3 }, ["a", "c"])).toEqual({ b: "2" });
});
