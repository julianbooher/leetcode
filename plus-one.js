// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

 

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Example 3:

// Input: digits = [0]
// Output: [1]

var plusOne = function(digits) {
    
};

console.log('test 1, output should be [1,2,4]', plusOne([1,2,3]));
console.log('test 2, output should be [4,3,2,2]', plusOne([4,3,2,1]));
console.log('test 3, output should be [1]', plusOne([0]));
console.log('test 4, output should be [1,3,0]', plusOne([1,2,9]));
console.log('test 5, output should be [1,0,0,0]', plusOne([9,9,9]));