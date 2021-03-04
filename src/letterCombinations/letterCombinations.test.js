import letterCombinations from './letterCombinations.js';

it('finds letter combinations with a 2 digit number', ()  => {
  expect(letterCombinations("23")).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"]);
})

it('returns an empty array for an empty string', ()  => {
  expect(letterCombinations("")).toEqual([]);
})