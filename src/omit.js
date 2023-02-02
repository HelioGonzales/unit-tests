function omit(object, paths) {
  const obj = object;
  for (const prop in object) {
    for (const key in paths) {
      if (paths[key] === prop) {
        obj[prop] = object[prop];
        delete obj[prop];
      }
    }
  }
  return obj;
}

const object = { a: 1, b: "2", c: 3 };

console.log(omit(object, ["a", "c"]));

module.exports = omit;
