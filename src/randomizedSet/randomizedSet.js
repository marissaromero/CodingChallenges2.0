// Link to Leetcode Problem
// https://leetcode.com/problems/insert-delete-getrandom-o1/
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.storage = {};
  this.set = [];
};

/**
* Inserts a value to the set. Returns true if the set did not already contain the specified element.
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  if (val in this.storage) {
      return false;
  } else {
      this.storage[val] = this.set.length-1;
      this.set.push(val);
      return true;
  }

};

/**
* Removes a value from the set. Returns true if the set contained the specified element.
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  if (val in this.storage) {
      this.set.slice(this.storage[val], 1);
      delete this.storage[val];
      return true;
  } else {
      return false;
  }
};

/**
* Get a random element from the set.
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  let min = Math.ceil(0);
  let max = Math.floor(this.set.length-1)
  let randomIndex = Math.floor(Math.random()*(max-min+1)+min)
  return this.set[randomIndex]
};

/**
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/