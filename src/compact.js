function compact(array) {
  let length = 0;
  let arr = [];
  let falsy;
  while (array[length] !== undefined) {
    length++;
  }
  for (let i = 0; i < length; i++) {
    falsy = Boolean(array[i]);
    if (falsy === true) {
      arr = [...arr, array[i]];
    }
  }
  return arr;
}

module.exports = compact;
