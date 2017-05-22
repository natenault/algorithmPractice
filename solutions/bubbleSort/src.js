var bubbleSort = function(array) {
  var len = array.length;

  // iterate through the array
  for (var i = 0; i < len; i++) {
    var swaps = 0;

    // for each element at i, iterate through remaining values in array
    for (var j = 0; j < len - i; j++) {

      // if ith value > ith + 1 value
      if (array[j] > array[j + 1]) {
        swaps++;

        // swap the values
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }

    // if no swaps were made, array is sorted
    // break out of loop
    if (!swaps) {
      break;
    }
  }

  // return the sorted array
  return array;
};
