const compact = require("../src/compact");

test("[0, 1, false, 2, '', 3] to get [1, 2, 3]", () => {
  expect(compact([0, 1, false, 2, "", 3])).toStrictEqual([1, 2, 3]);
});
