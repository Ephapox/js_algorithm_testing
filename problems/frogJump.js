module.exports = function (arr) {
  var pos = 0;
  var jump = 0;
  if (arr.length === 0) { return -1; }
  for (var i = 0; pos <= arr.length; i = pos) {
    if (pos > arr.length - 1) {
      break;
    } else if (pos < 0) {
      break;
    } else if (jump > 1000) {
      return -1;
    }
    pos += arr[i];
    jump++;
  }
  return jump;
}
