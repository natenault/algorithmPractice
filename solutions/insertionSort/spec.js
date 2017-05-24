// Test Suite
describe('insertionSort', function () {

  // Test spec (unit test)
  it('should exist', function () {
    expect(insertionSort).to.exist;
  });

  it('should be a function', function() {
    expect(insertionSort).to.be.a.Function;
  });

  it('should return an array', function() {
    var array = testingTransform([ 1, 2, 3 ]);
    var result = insertionSort(array);
    expect(result).to.exist;
    expect(result).to.be.instanceof(Array);
  });

  it('should return the original array', function() {
    var array = testingTransform([ 4, 3, 2, 1 ]);
    var result = insertionSort(array);
    // result should be sorted, original array,
    // not instance of new array
    expect(result).to.equal(array);
  });

  it('should sort an array numerically', function() {
    var array = testingTransform([101, 23, 42, 5, 8, 4]);
    insertionSort(array);
    expect(array).to.eql([
      {value: 4, i: 5},
      {value: 5, i: 3},
      {value: 8, i: 4},
      {value: 23, i: 1},
      {value: 42, i: 2},
      {value: 101, i: 0}
    ]);
  });

  it('should handle negative numbers', function() {
    var array = testingTransform([2, 1, 0, -1, -2]);
    insertionSort(array);
    expect(array).to.eql([
      {value: -2, i: 4},
      {value: -1, i: 3},
      {value: 0, i: 2},
      {value: 1, i: 1},
      {value: 2, i: 0}
    ]);
  });

  it('should handle presorted arrays', function() {
    // ASC
    var array = testingTransform([1, 2, 3]);
    insertionSort(array);
    expect(array).to.eql([
      {value: 1, i: 0},
      {value: 2, i: 1},
      {value: 3, i: 2}
    ]);
  });

  it('should impliment a stable sort', function() {
    var array = testingTransform([3, 1, 2, 0, 2]);
    insertionSort(array);
    expect(array).to.eql([
      {value: 0, i: 3},
      {value: 1, i: 1},
      {value: 2, i: 2},
      {value: 2, i: 4},
      {value: 3, i: 0}
    ]);
  });
});
