const pickBy = require("../src/pickBy");

test("Creates an object composed of the object properties predicate returns truthy for", () => {
  expect(
    pickBy(
      {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
      },
      (val) => val > 2
    )
  ).toEqual({ c: 3, d: 4, e: 5 });
});
