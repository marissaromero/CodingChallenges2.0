// Link to Leetcode Problem
// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

var smallerNumbersThanCurrent = function(nums) {
  const results = [];
  for(let i=0; i < nums.length; i++) {
      let count = 0;
      for (let j=0; j < nums.length; j++) {
          if(j !== i && nums[j] < nums[i]) {
              count++
          }
      }
      results.push(count);
  }
  return results;

};