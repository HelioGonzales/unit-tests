const take = require("../src/take");

test("Creates a slice of [1, 2, 3], with 2 elements taken from the begining to get [1, 2]", () => {
  expect(take([1, 2, 3], 2)).toStrictEqual([1, 2]);
});
