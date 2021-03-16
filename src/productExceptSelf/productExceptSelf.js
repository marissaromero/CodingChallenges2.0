// Link to Leetcode Problem
// https://leetcode.com/problems/product-of-array-except-self/

var productExceptSelf = function(nums) {
  let results = [];
  function walk(index, leftProduct) {
      let rightProduct = 1;
      for (let i=index; i < nums.length-1; i++) {
        rightProduct = rightProduct*nums[i+1];
      }
      results.push(rightProduct*leftProduct);
      if (index !== nums.length-1) {
        walk(index+1, leftProduct*nums[index]);
      }
  }
  walk(0, 1);
  return results;
};