// Link to Leetcode Problem
//Leetcode https://leetcode.com/problems/unique-paths/

const uniquePaths = (m, n) => {

  const walk = (m, n, row, col) => {
    if(row === m && col === n) {
      return 1
    };
    if(row > m || col > n) {
      return 0;
    }

    const pathsRight = walk(m, n, row, col + 1);
    const pathsDown = walk(m, n, row + 1, col);

    return pathsRight + pathsDown;
  };


  return walk(m, n, 1, 1);

};

