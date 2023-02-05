const chunk = require("../src/chunk");

test('Give an array [1, 2, 3, 4, 5, 6] with size = 2, get [["1", "2"], ["3", "4"], ["5", "6"]]', () => {
  expect(chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([
    ["1", "2"],
    ["3", "4"],
    ["5", "6"],
  ]);
});

test('Give an array ["a", "b", "c", "d", "e", "f"] with size = 3, get [["a", "b", "c"], ["d", "e", "f"]]', () => {
  expect(chunk(["a", "b", "c", "d", "e", "f"], 3)).toStrictEqual([
    ["a", "b", "c"],
    ["d", "e", "f"],
  ]);
});
