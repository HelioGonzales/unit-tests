const find = require("../src/find");

test("find should return value if this value exists in the array", () => {
  expect(find([1, 2, 3, 4, 5], (num) => num > 3)).toEqual(4);
});
