module.exports = function (obj) {
  var twin = Object.create(obj);
  twin.hasGoatee = true;
  return twin;
}
