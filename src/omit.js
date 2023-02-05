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

module.exports = omit;
