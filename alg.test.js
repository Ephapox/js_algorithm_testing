var assert = require("chai").assert;
var modulus_sum = require('./problems/modulus_sum'),
    frogJump = require('./problems/frogJump'),
    answer = require("./problems/answer"),
    findOutlier = require("./problems/findOutlier"),
    evilTwin = require("./problems/evilTwin"),
    count = require("./problems/count"),
    number_zoo = require('./problems/number_zoo'),
    tic_tac_toe = require('./problems/tic_tac_toe');

describe("someFunction", function () {
  it("should return 20 for n = 10 and m = 5", function () {
    var sum = modulus_sum(10, 5);
    assert(sum === 20, "n = 10 | m = 5 does not return 20");
  });
  it("should return 190 for n = 20 and m = 20", function () {
    var sum = modulus_sum(20, 20);
    assert(sum === 190, "n = 20 | m = 20 does not return 190");
  });
  // it("works", function (done) {
  //   var sum = modulus_sum(33703909, 16788763);
  //   assert(sum === 281870532675942, "nope");
  //   done();
  // });
  // it("works", function (done) {
  //   var sum = modulus_sum(34087417, 29232233);
  //   assert(sum === 439048116731548, "nope");
  //   done();
  // });
})

describe("frogJump", function () {
  it("should be 4 for [1,2,2,-1]", function () {
    var jumps = frogJump([1, 2, 2, -1]);
    assert(jumps === 4, "jumps is " + jumps);
  });
  it("should be 3 for [1,2,1,5]", function () {
    var jumps = frogJump([1, 2, 1, 5]);
    assert(jumps === 3, "jumps is " + jumps);
  });
  it("should 4 for [1,1,1,1]", function () {
    var jumps = frogJump([1, 1, 1, 1]);
    assert(jumps === 4, "jumps is " + jumps);
  });
  it("should 1 for [-3]", function () {
    var jumps = frogJump([-3]);
    assert(jumps === 1, "jumps is " + jumps);
  });
  it("should return -1 for [1,-1]", function () {
    var jumps = frogJump([1,-1]);
    assert(jumps === -1, "jumps is " + jumps);
  });
  it("should return -1 for an [0,1,3,4]", function () {
    var jumps = frogJump([0,1,3,4]);
    assert(jumps === -1, "jumps is " + jumps);
  });
  it("should return -1 for an empty array", function () {
    var jumps = frogJump([]);
    assert(jumps === -1, "jumps is " + jumps);
  });
});

describe("add recursion", function () {
  it("should return 1 for 379", function () {
    var sum = answer("379");
    assert(sum === 1, "sum is ", sum);
  });
});

describe("findOutlier", function () {
  it('should return an odd integer in an array of even integers', function () {
    var int = findOutlier([2,242,563,764,4,8]);
    assert(int === 563, "returned " + int);
  });
});

describe("evilTwin", function () {
  it("should make a copy of the original obj", function () {
    var obj = {x: 5};
    var twin = evilTwin(obj);
    assert(twin.hasGoatee, "twin.hasGoatee must be true", twin);
    assert(!obj.hasGoatee, "obj must not have hasGoatee " + obj.hasGoatee);
  });
});

describe("count", function () {
  it("should output {'a': 2, 'b': 1} for 'aba'", function () {
    var obj = count("aba");
    assert(obj.a === 2 && obj.b === 1, "wrong, output is: " + JSON.stringify(count));
  });
  it("should output an empty object for an empty string", function () {
    var obj = count("");
    assert(Object.keys(obj).length === 0, "wrong, output is: " + JSON.stringify(obj));
  });
});

describe("number_zoo", function () {
  it("should return 2 for [1,3]", function () {
    var missing = number_zoo([1,3]);
    assert(missing === 2, "expected: " + 2 + ", actual: " + missing);
  });
});
