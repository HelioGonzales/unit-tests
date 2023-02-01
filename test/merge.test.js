const merge = require("../src/merge");

test(" merges own and inherited enumerable string keyed properties of source objects into the destination object", () => {
  expect(merge({ a: 1, b: 2 }, { c: 3, d: 4 })).toStrictEqual({
    a: 3,
    b: 6,
    c: 7,
    d: 1,
  });
});
