## Move Zeroes

### Question:

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative

order of the non-zero elements.

### Example:
Given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

### Note:

1. You must do this in-place without making a copy of the array.
2. Minimize the total number of operations.

### Answer:

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var position = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[position] = nums[i];
      position ++;
    }
  }
  for (var j = position; j < nums.length; j++) {
    nums[j] = 0;
  }
};
```

### Link

https://leetcode.com/problems/move-zeroes/
