const pickBy = (obj, func) => {
  const target = {};
  for (const key in obj) {
    if (func(obj[key])) {
      target[key] = obj[key];
    }
  }
  return target;
};

module.exports = pickBy;
