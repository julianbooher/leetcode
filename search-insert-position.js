// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Example 4:

// Input: nums = [1,3,5,6], target = 0
// Output: 0
// Example 5:

// Input: nums = [1], target = 0
// Output: 0
 

var searchInsert = function(nums, target) {
    
    for (let i = 0; i < nums.length; i++){
        if(nums[i] === target || nums[i] > target){
            return i; 
        }
    }

    return nums.length + 1;
};

console.log('test 1, output should be 2:', searchInsert([1,3,5,6], 5));
console.log('test 2, output should be 1:', searchInsert([1,3,5,6], 2));
console.log('test 3, output should be 4:', searchInsert([1,3,5,6], 7));
console.log('test 4, output should be 0:', searchInsert([1,3,5,6], 0));
console.log('test 5, output should be 0:', searchInsert([1], 0));
