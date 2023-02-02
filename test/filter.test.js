const filter = require("../src/filter");

test("Iterates over elements of an array, returning an array of all elements predicate", () => {
  expect(filter([1, 2, 3, 4, 5, 6], (a) => a % 2 !== 0)).toStrictEqual([
    1, 3, 5,
  ]);
});
