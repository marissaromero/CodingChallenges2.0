// Link to Leetcode Problem
// https://leetcode.com/problems/rotate-image/

var rotate = function(matrix) {
  matrix.reverse();
  for(let i = 0; i<matrix.length; i++){
      for(let j = i; j< matrix.length; j++){
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
 }
  return matrix;
};
