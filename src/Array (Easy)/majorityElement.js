// Link to Leetcode Problem
// https://leetcode.com/problems/majority-element/

var majorityElement = function(nums) {
  let storage= {};
  for(let i=0; i < nums.length; i++) {
      if(storage[nums[i]]) {
          storage[nums[i]]++;
      } else {
          storage[nums[i]] = 1;
      }
  }
  let majorityNumValue = nums[0];
  let majorityNumCount = storage[nums[0]];
  for(let key in storage) {
      if(storage[key] > majorityNumCount) {
          majorityNumCount = storage[key];
          majorityNumValue = key;
      }
  }
  return majorityNumValue;
};