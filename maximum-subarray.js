// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23

var maxSubArray = function(nums) {
    let sum = 0;
    let maxSum = -10000;
    
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0]
    
    for(let i = 0;i<nums.length;i++){
        sum+=nums[i];
        maxSum = Math.max(maxSum,sum);
        if(sum < 0) sum = 0;
    }
    return maxSum;
};


console.log('test 1, result should be 6:', maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log('test 2, result should be 1:', maxSubArray([1]))
console.log('test 3, result should be 23:', maxSubArray([5,4,-1,7,8]))

