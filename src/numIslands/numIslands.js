// Link to Leetcode Problem
// https://leetcode.com/problems/number-of-islands/

var numIslands = function(grid) {
	let islands = 0;

	for (let i=0; i < grid.length; i++) {
	    for (let j=0; j < grid[i].length; j++) {
	        if(grid[i][j] === '1') {
	            islands++;
	            seen(i,j);
	        }
	    }
	}

	function seen(i,j) {
	    if (i >= grid.length || i < '0' || j >= grid[i].length || j < '0' || grid[i][j] !== '1') {
	        return;
	    }
	    if (grid[i][j] !== '1') {
	        return;
	    }

	    grid[i][j] = '2';

	    seen(i+1,j);
	    seen(i, j+1);
	    seen(i-1, j);
	    seen(i, j-1);
	}

	return islands;
};

export default numIslands;
