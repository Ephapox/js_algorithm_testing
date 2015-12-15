module.exports = function (n, m) {
  var i, j, x, inc = 0, sum = 0, arr = [];
  for (i = 1; i <= n; i++) {
    inc++;
    arr.push(i % m);
    if(inc === 1000 || i === n) {
      for(j = 0, x = arr.length; j < x; j++) {
        sum += arr[j];
      }
      arr = [];
      inc = 0;
    }
  }
  return sum;
}
