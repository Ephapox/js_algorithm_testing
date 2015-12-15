function answer(x) {
  arr = x.split("");
  var sum = arr.reduce(function (pv, cv) {
    return parseInt(pv) + parseInt(cv);
  });
  if (sum.toString().split("").length > 1) {
    return answer(sum.toString());
  } else {
    return sum;
  }
}

module.exports = answer
