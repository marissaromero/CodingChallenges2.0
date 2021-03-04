// Link to Leetcode Problem
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/


var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
};

var letterCombinations = function(digits) {


    if (digits.length === 0 || digits === null) {
        return [];
    }
    let words =[];
    function helper(string, digitsRemaining) {
        if (digitsRemaining.length === 0) {
            words.push(string);
            return;
        }
        let currentDigit = digitsRemaining[0];
        let updatedDigitsRemaining = digitsRemaining.toString().slice(1);
        let letters = phoneDigitsToLetters[currentDigit];

        for (let i=0; i < letters.length; i++) {
            helper(string+letters[i], updatedDigitsRemaining);
        }
    }
    helper('', digits);
    return words;
};

export default letterCombinations;
