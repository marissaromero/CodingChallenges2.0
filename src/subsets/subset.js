// Link to Leetcode Problem
// https://leetcode.com/problems/subsets/

function subsets(nums) {
  //create variable to store subsets
	const result = [];
  //create recursive function that takes in temporary result and remaining digits
	function walk(temp, remain) {
    //push current subset into results
		result.push(temp);
    //iterate through remaining numbers
		for (let i = 0; i < remain.length; i++) {
      //run recursive function with current subset plus current number added on, increment index to move on to next
			walk(temp.concat(remain[i]), remain.slice(i + 1));
		}
	}
  walk([], nums);
	return result;
}