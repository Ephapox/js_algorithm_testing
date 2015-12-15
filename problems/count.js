module.exports = function (string) {
  var obj = {};
  if(string === "") return obj;
  var arr = string.split("");
  arr.forEach(function (char) {
    if (~Object.keys(obj).indexOf(char)) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  })
  return obj;
}
