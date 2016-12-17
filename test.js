/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
  var inputSplitArray = input.split('\n');
  var filePathLength = {0: 0};
  var maxFileLength = 0;
  for (var i = 0; i < inputSplitArray.length; i++) {
    var arr = inputSplitArray[i].split('\t')
    var depth = arr.length;
    filePathLength[depth] = filePathLength[depth - 1] + arr[arr.length -1].length + 1
    if (inputSplitArray[i].indexOf('.') !== -1) {
      if (filePathLength[depth] > maxFileLength) {
        maxFileLength = filePathLength[depth] - 1;
      }
    }
  }
  return maxFileLength;
};

