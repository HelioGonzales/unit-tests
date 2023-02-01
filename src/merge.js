function merge(object, other) {
  for (const key in other) {
    object[key] = other[key];
  }
  return object;
}

// var object = { a: 3, b: 6 };

// var other = { c: 7, d: 1 };

// console.log(merge(object, other));
module.exports = merge;
