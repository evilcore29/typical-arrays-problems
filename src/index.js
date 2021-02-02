
exports.min = function min (array) {
  if (!array || array.length === 0) return 0;
  return array.sort((a, b) => a - b)[0];
}

exports.max = function max (array) {
  if (!array || array.length === 0) return 0;
  return array.sort((a, b) => a - b)[array.length - 1];
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) return 0;
  let counter = 0;
  const arrLength = array.length;
  const result =
  array.map((number) => (counter += number))[arrLength - 1] / arrLength;
  return parseFloat((result / 10) * 10).toFixed(2);
}