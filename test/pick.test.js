const pick = require("../src/pick");

test("Creates an object composed of the picked object properties.", () => {
  expect(pick({ a: 1, b: "2", c: 3 }, ["a", "c"])).toEqual({ a: 1, c: 3 });
});
