const take = require("../src/take");

test("Array [1, 2, 3], 2 got [1, 2]", () => {
  expect(take([1, 2, 3], 2)).toStrictEqual([1, 2]);
});
