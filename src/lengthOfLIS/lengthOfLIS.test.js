import lengthOfLIS from './lengthOfLIS.js';

it('return the longest increasing subsequence', ()  => {
  expect(lengthOfLIS([10,9,2,5,3,7,101,18])).toEqual(4);
})

it('return zero for an empty array', ()  => {
  expect(lengthOfLIS([])).toEqual(0);
})

it('return 1 for a repeating array', ()  => {
  expect(lengthOfLIS([7,7,7,7,7,7,7])).toEqual(1);
})

it('return the longest increasing subsequence with skipping', ()  => {
  expect(lengthOfLIS([0,1,0,3,2,3])).toEqual(4);
})

