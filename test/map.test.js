const map = require("../src/map");

test("Creates an array of values by running each element in an array thru iteratee", () => {
  expect(map([1, 2, 3], (value) => value * 5)).toStrictEqual([5, 10, 15]);
});
