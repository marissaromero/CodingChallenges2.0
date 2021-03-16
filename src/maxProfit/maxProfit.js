// Link to Leetcode Problem
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function(prices) {
  //set min to be first price
  let min = prices[0];
  //set max to be 0 since no transactions equals 0 profit
  let max = 0;

  //iterate through prices
  for(let i = 1; i < prices.length; i++){
      //if current price turns a profit, update max
      if(prices[i] - min > max){
          max = prices[i] - min;
      }
      //current price is less than current minimum, update min
      if(prices[i] < min) {
          min = prices[i];
      }
  }
  //return final max
  return max;
};