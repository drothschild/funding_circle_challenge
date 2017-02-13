var assert = require('assert');

function isPrime(num) {
  var max = Math.sqrt(num);
  if (num <= 1) return false;

  for (var d = 2; d <= max; d++) {
    if (num % d === 0) return false;
  };

  return true;
};

function nextPrime(num) {
 do {
    num +=1;
  }
  while(!isPrime(num));

  return num;
};

function getPrimes(qty){ 
  var n = 2;
  var primes = [n];

  if (qty < 1) return [];

  for (var i = 1; i < qty; i++) {
    n = nextPrime(n);
    primes.push(n);
  };

  return primes;
};

function multTable(nums){
  // Have to set out the first cell with a blank space, since 1 is not a prime.
  var table = [[' '].concat(nums)];
  var row = [];

  nums.map (function (num) {
    row = [num]; 
    for (var i = 0; i < nums.length; i++){
      row.push(num*nums[i]);
    };
    table.push(row);
  });
  return table;
};

function padLeft(pad, str) {
  return (pad + str).slice(-pad.length);
};

function printTable(table) {
  var printOut = '';
  var pad = '';
  // set pad to spaces the length of the longest number(and last) in the table+1
  var maxPadLength = table[table.length-1][table.length-1].toString().length;
  for(var i = 0; i <= maxPadLength; i++){
    pad += ' ';
  };

  table.map (function (row, i) {
    row.map (function (cell, i) {
      process.stdout.write(padLeft(pad, cell));
    });
    process.stdout.write('\n');
  });
};

// Test code

describe('TEST PRIME FUNCTIONS', function() {
  
  describe("Is 13 Prime", function () {
    it("should return TRUE", function () {
      var test = isPrime(13);
      var answer = true;
      assert.equal(test,answer);
    });
  });

    describe("Is 2 Prime", function () {
    it("should return TRUE", function () {
      var test = isPrime(2);
      var answer = true;
      assert.equal(test,answer);
    });
  });


  describe("Is 4 Prime", function () {
    it("should return FALSE", function () {
      var test = isPrime(4);
      var answer = false;
      assert.equal(test,answer);
    });
  });

  describe("Is 15 Prime", function () {
    it("should return FALSE", function () {
      var test = isPrime(15);
      var answer = false;
      assert.equal(test,answer);
    });
  });

  describe("Next Prime of 13", function () {
    it("should return 17", function () {
      var test = nextPrime(13);
      var answer = 17;
      assert.equal(test,answer);
    });
  });

  describe("Next Prime of 2", function () {
    it("should return 3", function () {
      var test = nextPrime(2);
      var answer = 3;
      assert.equal(test,answer);
    });
  });

  describe("Get 1 prime", function () {
    it("should return an array of 2", function () {
      var test = getPrimes(1);
      var answer = [2];
      assert.deepEqual(test,answer);
    });
  });

  describe("Get 2 primes", function () {
    it("should return an array of 2, 3", function () {
      var test = getPrimes(2);
      var answer = [2,3];
      assert.deepEqual(test,answer);
    });
  });

  describe("Get 10 primes", function () {
    it("should return an array of the first ten primes", function () {
      var test = getPrimes(10);
      var answer = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
      assert.deepEqual(test,answer);
    });
  });

});

// Driver code
var t0 = new Date().getTime();
printTable((multTable(getPrimes(10))));
var t1 = new Date().getTime();
process.stdout.write(" PrintTable took " + (t1 - t0) + " milliseconds.");
