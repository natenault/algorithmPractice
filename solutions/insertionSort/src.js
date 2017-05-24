// This function is to help you test, and should not be incorporated into solution.
// It will transform an array of numbers into an array of valid objects.
var testingTransform = function(array) {
  var transform = [];

  for (var i = 0; i < array.length; i++) {
    transform.push({value: array[i], i: i});
  }

  return transform;
};

// Solution
var insertionSort = function(array) {
  var len = array.length;

  for (var i = 1; i < len; i++) {
    var current = array[i];
    var hole = i;

    while (hole && current.value < array[hole - 1].value) {
      array[hole] = array[hole - 1];
      hole -= 1;
    }

    array[hole] = current;
  }

  return array;
};
