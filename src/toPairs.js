function toPairs(object) {
  return Object.entries(object);
}

console.log(toPairs({ a: 1, b: 2 }));

module.exports = toPairs;
