// Link to Leetcode Problem
//https://leetcode.com/problems/find-the-duplicate-number/submissions/

var findDuplicate = function(nums) {
  let storage = {};

  for (let i=0; i < nums.length; i++) {
      if (storage[nums[i]]) {
          return nums[i];
      }
      storage[nums[i]] = 1;
  }

};