import numIslands from './numIslands.js';

it('counts number of islands for a nxn grid', ()  => {
  expect(numIslands([
    ["1","1","1","1"],
    ["1","1","0","1"],
    ["1","1","0","0"],
    ["0","0","0","0"]
  ])).toEqual(1);
})

it('counts number of islands for a mxn grid', ()  => {
  expect(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ])).toEqual(3);
})