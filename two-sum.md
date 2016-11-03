## Two Sum

### Question:

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

### Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,     
return [0, 1].

### Wrong Answer

```js
var twoSum = function(nums, target) {
  var hashTable = {};
  for (var i = 0; i < nums.length; i++) {
    hashTable[nums[i]] = i;
  }
  for (var j = 0; j < nums.length; j++) {
    var num = nums[j];
    var diff = target - num;
    var index = hashTable[diff];
    if (index !== undefined) {
      return [index, i]
    }
  }
}
```

### Right Answer:

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var hashTable = {};
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    var diff = target - num;
    var index = hashTable[diff];
    // 由于index可能是0，所以不能简单的写成if(index)
    if (index !== undefined) {
      return [index, i];
    }
    // 由于nums可能会有重复的值，所以不能先构造哈希表再判断
    hashTable[num] = i;
  }
};
```

### Link

https://leetcode.com/problems/two-sum/
