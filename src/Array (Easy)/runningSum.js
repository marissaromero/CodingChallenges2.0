// Link to Leetcode Problem
// https://leetcode.com/problems/running-sum-of-1d-array/

var runningSum = function(nums) {
  const result = [];
  let sum = 0;
  for(let i=0; i < nums.length;i++) {
      sum += nums[i];
      result.push(sum);
  }
  return result;
};
