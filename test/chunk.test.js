const chunk = require("../src/chunk");

test('arr [1, 2, 3, 4, 5, 6] size = 2, to get [["1", "2"], ["3", "4"], ["5", "6"]]', () => {
  expect(chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([
    ["1", "2"],
    ["3", "4"],
    ["5", "6"],
  ]);
});
test('arr ["a", "b", "c", "d", "e", "f"] size = 3, to get [["a", "b", "c"], ["d", "e", "f"]]', () => {
  expect(chunk(["a", "b", "c", "d", "e", "f"], 3)).toStrictEqual([
    ["a", "b", "c"],
    ["d", "e", "f"],
  ]);
});
