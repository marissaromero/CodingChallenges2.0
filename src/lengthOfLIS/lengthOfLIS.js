var lengthOfLIS = function(nums) {
  if(!nums || nums.length === 0) {
    return 0;
    }
  let subsequenceLen = 0;
  for (let i=0; i < nums.length; i++) {
      let currentSub = [nums[i]];
      for(let j=i+1; j < nums.length; j++) {
          if(nums[j]>currentSub[currentSub.length-1]) {
              currentSub.push(nums[j]);
          }
      }
      if(currentSub.length>subsequenceLen) {
          subsequenceLen=currentSub.length;
      }
  }
  return subsequenceLen;
};

export default lengthOfLIS;