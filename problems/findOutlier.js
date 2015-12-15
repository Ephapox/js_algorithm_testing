module.exports = function (arr) {
  var evens = arr.filter(function (el, i, array) {
    return el % 2 === 0;
  });
  if (evens.length === 1) return evens[0];

  return arr.filter(function (el, i, array) {
    return el % 2 !== 0;
  })[0];
}
