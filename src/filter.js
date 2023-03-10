function addToArr(arr, value) {
  arr[arr.length] = value;
  return arr;
}

function filter(arr, func) {
  const newArr = [];
  for (let i = 0; arr.length > i; i += 1) {
    if (func(arr[i])) {
      addToArr(newArr, arr[i]);
    }
  }
  return newArr;
}

module.exports = filter;
