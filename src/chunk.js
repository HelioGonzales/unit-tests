function chunk(arr, size = 1) {
  let length = 0;
  while (arr[length] !== undefined) {
    length++;
  }
  let join = (arr, separator = "") => {
    let result = "";
    for (let i = 0; i < length; i++) {
      if (result) {
        result += separator;
      } else {
        result += "";
      }
      result += arr[i];
    }
    return result;
  };
  let str = join(arr);
  let arrChunks = [];
  for (let i = 0; i < length; i += size) {
    let arrChunk = str.substring(i, i + size).split("");
    arrChunks = [...arrChunks, arrChunk];
  }
  return arrChunks;
}

module.exports = chunk;
