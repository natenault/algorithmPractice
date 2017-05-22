// Test Suite
describe('Bubble Sort', function () {

  it('should exist', function () {
    expect(bubbleSort).to.exist;
  });

  it('should be a function', function () {
    expect(bubbleSort).to.be.a.Function;
  });

  it('should sort an array numerically', function () {
    var input = [2, 1, 43, 34, 100, 27, 27];
    var expected = [1, 2, 27, 27, 34, 43, 100];
    expect(bubbleSort(input)).to.eql(expected);
  });

  it('should sort arrays with decimal numbers', function () {
    var input = [31.9, 31.2, 5, 99, 3, 46, 99];
    var expected = [3, 5, 31.2, 31.9, 46, 99, 99];
    expect(bubbleSort(input)).to.eql(expected);
  });

  it('should sort arrays with negative numbers', function () {
    var input = [33, -45, 3, -5, 5.4, -5.4, 27];
    var expected = [-45, -5.4, -5, 3, 5.4, 27, 33];
    expect(bubbleSort(input)).to.eql(expected);
  });

  it('should sort reverse sorted arrays', function () {
    var input = [5, 4, 3, 2, 1];
    var expected = [1, 2, 3, 4, 5];
    expect(bubbleSort(input)).to.eql(expected);
  });

  it('should handle presorted arrays', function () {
    var input = [1, 2, 3, 4, 5];
    var expected = [1, 2, 3, 4, 5];
    expect(bubbleSort(input)).to.eql(expected);
  });

});
