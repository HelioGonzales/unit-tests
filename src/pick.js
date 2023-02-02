function pick(object, paths) {
  const obj = {};
  for (const prop in object) {
    for (const key of paths) {
      if (key === prop) {
        obj[prop] = object[prop];
      }
    }
  }
  return obj;
}

console.log(pick({ a: 1, b: "2", c: 3 }, ["a", "c"]));

module.exports = pick;
