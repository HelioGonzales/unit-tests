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

module.exports = pick;
