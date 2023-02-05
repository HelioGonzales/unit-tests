function take(array, n = 1) {
  let length = 0;
  let arr = [];
  while (array[length] !== undefined) {
    length++;
  }
  if (n > length) {
    return array;
  } else {
    for (let i = 0; i < n; i++) {
      let el = array[i];
      arr = [...arr, el];
    }
    return arr;
  }
}

module.exports = take;
