const toPairs = require("../src/toPairs");

test("eturns the key-value pairs", () => {
  expect(toPairs({ a: 1, b: 2 })).toStrictEqual([
    ["a", 1],
    ["b", 2],
  ]);
});
