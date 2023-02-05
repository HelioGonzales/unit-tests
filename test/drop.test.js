const drop = require("../src/drop");

test("Give an array [1, 2, 3] slice with default elements dropped from the beginning to get [2, 3]", () => {
  expect(drop([1, 2, 3])).toStrictEqual([2, 3]);
});

test("Give an array [1, 2, 3] slice with 2 elements dropped from the beginning to get [3]", () => {
  expect(drop([1, 2, 3], 2)).toStrictEqual([3]);
});
