// Link to Leetcode Problem
//https://leetcode.com/problems/set-matrix-zeroes/

var setZeroes = function(matrix) {
  let rows = {};
  let columns = {};

  for(let i=0; i < matrix.length; i++) {
      for (let j=0; j < matrix[0].length; j++) {
          if(matrix[i][j] === 0) {
              rows[i] = 1;
              columns[j] = 1;
          }
      }
  }

      for(let i=0; i < matrix.length; i++) {
      for (let j=0; j < matrix[0].length; j++) {
          if(i in rows) {
              matrix[i][j] = 0;
          } else if(j in columns) {
             matrix[i][j] = 0;
          }
      }
  }

};