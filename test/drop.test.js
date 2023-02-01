const drop = require("../src/drop");

test("arr [1, 2, 3] to get [2, 3]", () => {
  expect(drop([1, 2, 3])).toStrictEqual([2, 3]);
});

test("arr [1, 2, 3] to get [3]", () => {
  expect(drop([1, 2, 3], 2)).toStrictEqual([3]);
});
