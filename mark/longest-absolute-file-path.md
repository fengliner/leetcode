## Longest Absolute File Path

### Question:
Suppose we abstract our file system by a string in the following manner:       

The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:               

```
dir
    subdir1
    subdir2
        file.ext
```

The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.    

The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:         

```
dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext
```

The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1. subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.        

We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext", and its length is 32 (not including the double quotes).         

Given a string representing the file system in the above format, return the length of the longest absolute path to file in the abstracted file system. If there is no file in the system, return 0.         

### Note:      

The name of a file contains at least a . and an extension.       
The name of a directory or sub-directory will not contain a ..       
Time complexity required: O(n) where n is the size of the input string.      

Notice that a/aa/aaa/file1.txt is not the longest file path, if there is another path aaaaaaaaaaaaaaaaaaaaa/sth.png.      

### Answer1: O(n * n)

```js
var isFile = function (str) {
  if (str.indexOf('.') !== -1) {
    return true;
  }
  return false;
}

var findFilePath = function (arr, index) {
  var fileDepth = arr[index].split('\t').length;
  var filePath = [];
  filePath.push(arr[index]);
  for (var i = index-1; i >= 0; i--) {
    if (arr[i].split('\t').length === fileDepth - 1) {
      filePath.push(arr[i]);
      fileDepth --;
      continue;
    }
  }
  return filePath;
}

var lengthLongestPath = function (input) {
  var inputSplitArray = input.split('\n');
  var filePathArray = [];
  var firstFileIndex;
  for (var i = 0; i < inputSplitArray.length; i++) {
    if (isFile(inputSplitArray[i])) {
      filePathArray.push(findFilePath(inputSplitArray, i));
    }
  }
  var longestFilePath = '';
  for (var i = 0; i < filePathArray.length; i++) {
    var temp = '';
    for (var j = filePathArray[i].length - 1; j >=0; j--) {
      temp += filePathArray[i][j].split('\t')[filePathArray[i][j].split('\t').length -1];
      if (j > 0) {
        temp += '/';
      }
    }
    if (temp.length > longestFilePath.length) {
      longestFilePath = temp;
    }
  }
  return longestFilePath;
};
```

### Answer2: O(n)

```js
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
```

### Link

https://leetcode.com/problems/longest-absolute-file-path/

