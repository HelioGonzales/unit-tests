function drop(array, n = 1) {
  let length = 0;
  let arr = [];
  while (array[length] !== undefined) {
    length++;
  }
  for (let i = n; i < length; i++) {
    let el = array[i];
    arr = [...arr, el];
  }
  return arr;
}

module.exports = drop;
