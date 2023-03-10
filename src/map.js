function myLength(array) {
  let length = 0;
  while (array[length] !== undefined) {
    length += 1;
  }
  return length;
}

const map = (array, callback) => {
  const result = [];
  const length = myLength(array);
  for (let index = 0; index < length; index += 1) {
    const value = array[index];
    result[index] = callback(value, index, array);
  }
  return result;
};

module.exports = map;
