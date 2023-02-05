const compact = require("../src/compact");

test("Give an array [0, 1, false, 2, '', 3] remove falsy values [1, 2, 3]", () => {
  expect(compact([0, 1, false, 2, "", 3])).toStrictEqual([1, 2, 3]);
});
